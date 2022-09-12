import React from 'react';
import {useAuth0} from "@auth0/auth0-react";

const Home = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    //
    // return (
    //     !isAuthenticated && (
    //         <button onClick={() => loginWithRedirect()}>
    //             ورود
    //         </button>
    //     )
    // )
    return <>


        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end">
                        <h1 className="text-uppercase text-white font-weight-bold">یک قالب حرفه ای تک صفحه ای ساخته شده
                            با
                            بوت استرپ</h1>
                        <hr className="divider my-4"/>
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 font-weight-light mb-5">این قالب به شما کمک می کند تا رزومه ای حرفه
                            ای
                            را در نمونه کارهای خود داشته باشید. کافیست این قالب را دانلود کنید و محتوای آن را سفارشی
                            سازی
                            کنید!</p>
                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">بیشتر بدانید</a>
                        <button className="btn btn-light btn-xl js-scroll-trigger mx-3" onClick={() => loginWithRedirect()} >شروع کنید!</button>
                    </div>
                </div>
            </div>
        </header>

        <div className="page-section bg-primary" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">تمام آنچه نیاز دارید!</h2>
                        <hr className="divider light my-4"/>
                        <p className="text-white-50 mb-4">این قالب تمامی امکاناتی که شما برای طراحی و پیاده سازی یک سایت
                            شخصی یا شرکتی نیاز دارید پیش بینی کرده است. علاوه بر آن شما به سادگی می توانید بخش های جدید
                            را
                            به این قالب اضافه کنید.</p>
                        {/*<a className="btn btn-light btn-xl js-scroll-trigger" href="#services">شروع کنید!</a>*/}
                    </div>
                </div>
            </div>
        </div>

        <div className="page-section" id="services">
            <div className="container">
                <h2 className="text-center mt-0">معرفی خدمات شما</h2>
                <hr className="divider my-4"/>
                <div className="row">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                            <h3 className="h4 mb-2">محصولات ویژه</h3>
                            <p className="text-muted mb-0">محصولات ویژه خود را معرفی کنید</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                            <h3 className="h4 mb-2">بروزرسانی مداوم</h3>
                            <p className="text-muted mb-0">چگونه بروزرسانی ها انجام میگردد؟</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                            <h3 className="h4 mb-2">آماده بکارگیری</h3>
                            <p className="text-muted mb-0">برای بکارگیری قالب ها تنها کافیست محتوا را جایگزین کنید.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                            <h3 className="h4 mb-2">طراحی با عشق</h3>
                            <p className="text-muted mb-0">این قالب را برای خود شخصی سازی کنید | ارائه توسط پلاگین
                                یاب </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="pics/portfolio/fullsize/1.jpg">
                            <img className="img-fluid" src="pics/portfolio/thumbnails/1.jpg" alt=""/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">
                                    سایت شرکت
                                </div>
                                <div className="project-name">
                                    سایت دانلود رایگان پلاگین یاب
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="pics/portfolio/fullsize/2.jpg">
                            <img className="img-fluid" src="pics/portfolio/thumbnails/2.jpg" alt=""/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">
                                    سایت شرکت
                                </div>
                                <div className="project-name">
                                    سایت دانلود رایگان پلاگین یاب
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="pics/portfolio/fullsize/3.jpg">
                            <img className="img-fluid" src="pics/portfolio/thumbnails/3.jpg" alt=""/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">
                                    سایت شرکت
                                </div>
                                <div className="project-name">
                                    سایت دانلود رایگان پلاگین یاب
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="pics/portfolio/fullsize/4.jpg">
                            <img className="img-fluid" src="pics/portfolio/thumbnails/4.jpg" alt=""/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">
                                    سایت شرکت
                                </div>
                                <div className="project-name">
                                    سایت دانلود رایگان پلاگین یاب
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="pics/portfolio/fullsize/5.jpg">
                            <img className="img-fluid" src="pics/portfolio/thumbnails/5.jpg" alt=""/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">
                                    سایت شرکت
                                </div>
                                <div className="project-name">
                                    سایت دانلود رایگان پلاگین یاب
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="pics/portfolio/fullsize/6.jpg">
                            <img className="img-fluid" src="pics/portfolio/thumbnails/6.jpg" alt=""/>
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50">
                                    سایت شرکت
                                </div>
                                <div className="project-name">
                                    سایت دانلود رایگان پلاگین یاب
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="page-section bg-dark text-white">
            <div className="container text-center">
                <h2 className="mb-4">همی حالا رایگان دانلود کنید!</h2>
                <a className="btn btn-light btn-xl" href="https://PluginYab.ir/">دانلود رایگان!</a>
            </div>
        </div>

        <div className="page-section" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mt-0">با ما در تماس باشید!</h2>
                        <hr className="divider my-4"/>
                        <p className="text-muted mb-5">نظرات، پیشنهادات و انتقادات سازنده خود را با ما در میان
                            بگذارید.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                        <div>02100112233</div>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                        <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        <a className="d-block" href="mailto:contact@yourwebsite.com">info@YourSite.com</a>
                    </div>
                </div>
            </div>
        </div>
        <footer className="bg-light py-5">
            <div className="container">
                <div className="small text-center text-muted">Copyright &copy; 2019 - Start Bootstrap</div>
                <div className="small text-center text-muted">توسعه داده شده (فارسی | راست چین | بهبود عملکرد) توسط<a
                    href="https://PluginYab.ir/"> پلاگین یاب </a></div>
            </div>
        </footer>
    </>
};

export default Home;
