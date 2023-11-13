import { useRouteError } from 'react-router-dom';

const Error: React.FC = () => {
     const error: unknown = useRouteError();

     if (error?.status === '404') return <h1>Not Found</h1>;

     return <div>Something went wrong</div>;
};

export default Error;
