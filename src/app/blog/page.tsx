import styles from './page.module.scss';

import { getAllPosts } from "@/api/posts/posts"
import LastPost from "@/components/last-post/LastPost"
import Posts from '@/components/posts/Posts';

export default async function Blog() {

  const posts = await getAllPosts();

  return (
    <div className="blog">

      <section className={styles.hero}>
        <div className="container-small">
          <LastPost data={posts} />
        </div>
      </section>

      <section className={styles.news}>
        <div className="container-small">
          <Posts
            filtered={false}
            data={posts}
            title='Все новости'
             />
        </div>
      </section>

    </div>
  )
}