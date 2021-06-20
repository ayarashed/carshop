import './about.scss';
import aboutBackground from'../../car-images/00-mercedes-amg-inside-amg-series-2560x1440.png';
import aboutgoalimg from'../../car-images/cq5dam.web.1440.1440.png';
import aboutgoalimg2 from'../../car-images/img-rent-tourist.png';
import icon1 from'../../car-images/maintenance-service-1-gray.jpg';
import icon2 from'../../car-images/car-disc-1-gray.jpg';
import icon3 from'../../car-images/car-leasing-1-gray.jpg';
import AOS from 'aos';
import { useEffect } from 'react';
const About = () => {
    useEffect(()=>{
        AOS.init({duration: 1500});
    },[]);
    return ( 
        <div className="about">
            <div className="about__who-we-are">
                <div className="about__who-we-are__img">
                    <img alt="" src={aboutBackground}/>
                </div>
                <div className="header__opacity"></div>
            </div>{/****who we are image******/}
            <div className="about__info">
                <div className="about__info__name">
                    <h1> نبذة عن شركتنا</h1>
                    <p><span>الاستاذ:</span> زين جمال مدير الشركة</p>
                    <p>
تذكر أنه لا يوجد "أنا" في الفريق. يعمل فريقنا المتماسك معًا ليوفر لك بحثًا رائعًا عن السيارة يناسب الجميع! نهتم بأمرين:<br/> جعل فريقنا أقوى لجعل حياة عملائنا أفضل. هذا هو. نأمل أن تعجبك النتائج.</p>
                </div>
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div  className="choos-us " data-aos="slide-up">
                            <div className="choos-us-icon">
                                <img alt="" src={icon1}/>
                            </div>
                            <p>مجموعتنا هي أكبر مستثمر وصاحب عمل في مصر. مع
                                تاريخها الطويل لأكثر من 50 عامًا
                                ، لديها أكثر من 70000 موظف. تدير 100 شركة تعمل في مجموعة متنوعة من الأنشطة: السياحة
                                والتصنيع والخدمات والنفط والغاز وتكنولوجيا المعلومات والتطوير
                                العقاري وعمليات تموين المطارات والاستثمارات الإدارية.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div  className="choos-us" data-aos="slide-up">
                            <div className="choos-us-icon">
                                <img alt="" src={icon2}/>
                            </div>
                            <p>
                                مجموعتنا هي أكبر مستثمر وصاحب عمل في
                                مصر. مع تاريخها الطويل لأكثر من 50 عامًا ، لديها أكثر
                                من 70000 موظف. تدير 100 شركة تعمل في مجموعة متنوعة من الأنشطة: السياحة 
                                والتصنيع والخدمات والنفط والغاز وتكنولوجيا 
                                المعلومات والتطوير العقاري وعمليات
                                تموين المطارات والاستثمارات الإدارية.
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-4 col-12">
                        <div  className="choos-us" data-aos="slide-up">
                            <div className="choos-us-icon">
                                <img alt="" src={icon3}/>
                            </div>
                            <p>مجموعتنا  هي أكبر مستثمر وصاحب عمل في مصر. مع تاريخها 
                            الطويل لأكثر من 50 عامًا 
                            ، لديها أكثر من 70000 موظف. تدير 100 شركة تعمل في مجموعة متنوعة من 
                            الأنشطة: السياحة والتصنيع والخدمات والنفط والغاز وتكنولوجيا
                             المعلومات والتطوير العقاري وعمليات تموين 
                            المطارات والاستثمارات الإدارية.</p>
                        </div>
                    </div>
                   </div>
            </div>
            </div>{/******end of company info*****/}
            <div className="ourgoal">
                <div className="container"> 
                    <h1 className="text-center">أهدافنا</h1>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="ourgoal__text" data-aos="fade-left">
                                <h3>أقل الاسعار </h3>
                                <p>نحن فخورون بحقيقة أننا نقدم واحدة من أقل أسعار الإيجار في السوق مقارنة بشركات تأجير
                                    السيارات الأخرى. لدينا أيضًا عروض دائمة، حيث يمكنك الحصول
                                    على سيارتك المفضلة بأسعار أقل.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="ourgoal__img" data-aos="fade-rigt">
                                <img alt="" src={aboutgoalimg}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 offset-md-2 col-12">
                            <div className="ourgoal__img" data-aos="fade-left">
                                <img alt="" src={aboutgoalimg2}/>
                            </div>
                        </div>
                        <div className="col-md-6  col-12">
                            <div className="ourgoal__text" style={{marginTop : "20px"}} data-aos="fade-right">
                                <h3>معنا سوف تستمتع بكل ماتحتاجه</h3>
                                <p>بالنسبة لنا, يجب أن تحظي خبرة ايجار سيارة بالقيادة الممتعة وتوفير الأموال لك أيضًا. ويكمن تركيزنا في أن نقدم لك خدمة عملاء ممتازة مع تجربة تأجير سيارات دون قلق في كل مرة تتفضل فيها بزيارتنا. ونؤمن بغرس بذور علاقات عمل تدوم طويلاً مع عملائنا وهذا سبب ترحيبنا بزيارتكم لنا لأننا نضمن أنكم ستحبون التجربة.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/******end of our goal*****/}
            
        </div>
    );
}
 
export default About;