import React from 'react';
import { Footer, Navigation } from "../../Layout";

const PageContainer = ({children}) => (
  <div>
    <Navigation items={NAV_ITEMS}/>
    {children}
    <Footer items={FOOTER_ITEMS}/>
  </div>
)

const NAV_ITEMS = [
  {key: "company", label: "About Stella Yoga", value: "#"},
  {key: "contactus", label: "Photo", value: "#"},
  {key: "carrers", label: "Blog", value: "#"},
  {key: "policy", label: "Contact", value: "#"},
  {key: "terms", label: "Login/Register", value: "#"}
]

const FOOTER_ITEMS = [
  {key: "company", label: "Company", value: "#"},
  {key: "contactus", label: "Contact us", value: "#"},
  {key: "carrers", label: "Carrers", value: "#"},
  {key: "policy", label: "Privacy policy", value: "#"},
  {key: "terms", label: "Terms", value: "#"}
]

export default PageContainer
