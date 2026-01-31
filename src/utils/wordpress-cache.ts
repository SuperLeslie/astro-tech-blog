// 数据缓存和性能优化工具
interface CachedPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
    author?: Array<{
      name: string;
    }>;
  };
}

class WordPressCache {
  private static cache: Map<string, any> = new Map();
  private static lastFetch: Map<string, number> = new Map();
  private static CACHE_DURATION = 5 * 60 * 1000; // 5 分钟缓存

  static async fetchWithCache<T>(url: string, key: string): Promise<T> {
    const now = Date.now();
    const lastFetchTime = this.lastFetch.get(key) || 0;

    // 检查缓存是否有效
    if (this.cache.has(key) && now - lastFetchTime < this.CACHE_DURATION) {
      return this.cache.get(key);
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // 更新缓存
      this.cache.set(key, data);
      this.lastFetch.set(key, now);

      return data;
    } catch (error) {
      console.error(`Error fetching ${key}:`, error);
      // 如果有旧缓存，返回旧数据
      if (this.cache.has(key)) {
        return this.cache.get(key);
      }
      throw error;
    }
  }

  // 获取所有文章（仅基本信息）
  static async getAllPosts(): Promise<Array<{ id: number; slug: string }>> {
    return this.fetchWithCache(
      "https://wordpress-1562921-6179732.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=100&_fields=id,slug",
      "all_posts",
    );
  }

  // 获取文章列表（包含摘要）
  static async getPostsList(): Promise<CachedPost[]> {
    return this.fetchWithCache(
      "https://wordpress-1562921-6179732.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&_fields=id,slug,title,excerpt,date,_embedded",
      "posts_list",
    );
  }

  // 获取单篇文章完整内容
  static async getPost(id: number): Promise<CachedPost> {
    return this.fetchWithCache(
      `https://wordpress-1562921-6179732.cloudwaysapps.com/wp-json/wp/v2/posts/${id}?_embed`,
      `post_${id}`,
    );
  }
}

export { WordPressCache, type CachedPost };
