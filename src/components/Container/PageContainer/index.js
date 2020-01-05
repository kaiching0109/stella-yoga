import React from 'react';
import { Footer } from "../../Layout";

const PageContainer = ({children}) => (
  <div>
    {children}
    <Footer />
  </div>
)

export default PageContainer
