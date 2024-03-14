import styles from './page.module.scss';

import { getCurrentPost } from "@/api/posts/posts";
import { IPost } from '@/interfaces/interfaces';

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params: { slug } }: Props) {
  const post: any = await getCurrentPost(slug);
  return {
    title: `30XSales || ${post.title}`
  }
}

export default async function Post({ params: { slug } }: Props) {

  const post: IPost = await getCurrentPost(slug);

  return (
    <div className={styles.post}>
      <div className="container-small">
        <div className={styles.postWrapper}>
          <div className={styles.postHeader}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.subtitle}>{post.subTitle}</p>
          </div>
          <div className={styles.postImageBox}>
            <img className={styles.img} src={post.imgPath} alt={post.title} />
          </div>
          <div className={styles.postText}>
            <p className={styles.text}>{post.body}</p>
          </div>
        </div>
      </div>
    </div>
  )
}