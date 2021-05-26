import React from 'react';

const SectionTitle = ({ title, className }) => <h2 className={className ? `section-title ${className}` : 'section-title'}>{title}</h2>;

export default SectionTitle;
