import { useEffect, useState } from "react";
import BlogList from "../BlogList/BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'My New Website',
      body: 'lorem ipsum...',
      author: 'Elroy'
    },
    {
      id: 2,
      title: 'My Second Website',
      body: 'lorem ipsum...',
      author: 'Pedro'
    },
    {
      id: 3,
      title: 'My Third Website',
      body: 'lorem ipsum...',
      author: 'Kameo'
    },
    {
      id: 4,
      title: 'My Fourth Website',
      body: 'lorem ipsum...',
      author: 'Elroy'
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs)
  }

  useEffect(() => {

  }, [])

  return ( 
    <>
      <div className="home">
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      </div>
    </>
   );
}
 
export default Home;