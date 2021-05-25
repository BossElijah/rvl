import React from 'react';

const PageTitle = ({ title, className }) => <h1 className={className ? `page-title ${className}` : 'page-title'}>{title}</h1>;

export default PageTitle;
