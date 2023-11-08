import React from "react";
import style from "./Style.Navbar.module.scss";

const Navbar = () => {
    return(<>
        <div className={style.main}>
            <div className={style.tabHolder}>
                <div className={style.tab}>
                    <h2>home</h2>
                </div>
                <div className={[style.tab, style.tabText].join(' ')}>
                    <h2>about</h2>
                </div>
                <div className={[style.tab, style.tabText].join(' ')}>
                    <h2>shop</h2>
                </div>
                <div className={[style.tab, style.tabText].join(' ')}>
                    <h2>featured</h2>
                </div>
                <div className={[style.tab, style.tabText].join(' ')}>
                    <h2>blog</h2>
                </div>
                <div className={[style.tab, style.tabText].join(' ')}>
                    <h2>contacts</h2>
                </div>
                <div className={style.divider}/>
                <div className={style.tab}>
                    <img className={style.twitter} src="data:image/png;base64,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"/>
                </div>
                <div className={style.tab}>
                    <img className={style.facebook} src="https://www.flyycredit.com/wp-content/uploads/2017/04/logo-facebook-404px-grey.png"/>
                </div>
            </div>
            <div className={style.section}>
                <div className={style.title}>
                    <h1 className={style.bigText}>men's</h1>
                    <h1>FASHION</h1>
                </div>
                <div className={style.spacer}/>
                <div className={style.searchSection}>
                    <div className={style.searchBar}>
                        <input className={style.inputBar}/>
                        <div className={style.searchBtn}>search</div>
                    </div>
                    <div className={style.tags}>
                        <div className={style.tag}>
                            <p className={style.tagText}> Register </p>
                        </div>
                        <div className={style.tag}>
                            <p> Blogs </p>
                        </div>
                        <div className={style.tag}>
                            <p> Delivery </p>
                        </div>
                        <div className={style.tag}>
                            <p> Checkout </p>
                        </div>
                        <div className={style.tag}>
                            <p> My Account </p>
                        </div>
                        <div className={style.tag}>
                            <img className={style.bag} src="https://static.vecteezy.com/system/resources/previews/000/583/299/original/online-shopping-bag-icon-vector.jpg"/>
                        </div>
                        <div className={style.tag}>
                            <p className={style.tagText}> Bag </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Navbar;