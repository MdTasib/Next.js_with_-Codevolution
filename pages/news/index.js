function NewsArticleList({ articles }) {
  return (
    <>
      <h2>List Of News Article</h2>
      {
        articles.map(article => {
          return (
            <div key={article.id}>
              <h3>{article.name}</h3>
            </div>
          )
        })
      }
    </>
  )
}

export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news');
  const data = await response.json();

  return {
    props: {
      articles: data
    }
  }
}