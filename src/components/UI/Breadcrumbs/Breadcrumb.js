import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb(props) {
  return (
    <div>
        <div className='container'>
            <h3 className='mt-4'><Link to="/">Home</Link> / <Link className='text-blue-600' to={props.url}>{props.pageName}</Link> /<Link className='text-blue-600' to={props.url}>{props.nextPageName}</Link></h3>
        </div>
    </div>
  );
}