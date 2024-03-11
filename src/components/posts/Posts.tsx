import styles from './Posts.module.scss';

import Post from '../post/Post';

type Props = {
  data: any
}

export default function Posts({ data }: Props) {
  return (
    <div className={styles.posts}>
      <h2 className={styles.title}>Блог</h2>
      <div className={styles.grid}>
        {data && data.map((post: any) => (
          <Post key={post.id} post={post} />
        )).slice(0, 3)}
      </div>
    </div>
  )
}