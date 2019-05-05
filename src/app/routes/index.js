import React from 'react';
import { Route } from 'react-router-dom';
import routes from './routes'
export default function(basePath = '') {
  return routes.map(route => {
  	const { path, ...rest } = route
	return <Route key={path} path={path} {...rest} />    
  });
}
