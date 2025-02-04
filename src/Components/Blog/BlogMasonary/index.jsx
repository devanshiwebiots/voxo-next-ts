import { getAllUsers } from '@/Service/FetchApi';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import MasonryCard from './MasonryCard';

const BlogMasonaryContain = () => {
  const dispatch = useDispatch();
  const types = 'GETBLOGDATA';
  const { Blogdatanew } = useSelector((state) => state.BlogReducer);
  useEffect(() => {
    !Blogdatanew && dispatch(getAllUsers('blog', types));
  }, [Blogdatanew, dispatch]);
  const BlogDataFilter = Blogdatanew && Blogdatanew.filter((el) => el.type === 'blogMasonary');
  return (
    <section className='masonary-blog-section section-b-space'>
      <Container>
        <MasonryCard BlogDataFilter={BlogDataFilter} />
      </Container>
    </section>
  );
};

export default BlogMasonaryContain;
