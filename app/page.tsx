import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Fragment } from "react";
import cssStyle from './page.module.css'

console.log(cssStyle.btn);

export default function Home() {
  return (
    <div>
      <h1>Class Assignment</h1>
      <br/>
      <h1>This is my home page</h1>
      <br/>
      <ul>
    <li className={cssStyle.btn}><Link href="/about">About</Link></li><br/>
    <li className={cssStyle.btns}><Link href="/contacts">Contact Us</Link></li>  <br/>
    <li className={cssStyle.btn}><Link href="/products">Products</Link></li><br/>
    <li className={cssStyle.btn}><Link href="/products/saleitems">Sales</Link></li><br/>
    <li className={cssStyle.btns}><Link href="/suggestions">Suggestions</Link></li>
    </ul>
    
     </div>
  );
}
