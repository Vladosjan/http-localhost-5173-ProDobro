import { Outlet } from "react-router-dom";
import logoDark from "./logo-dark.svg";

import "./app.css";

export function Welcome() {
  return (
    <div className="app">
      <Header />
      <main>
        <MainContent />
        <Outlet />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header id="header" className="header-corporate header-11 header-loaded">
    <div className="header-main" style={{ top: "0px", padding: "20px 0 0 15%", marginBottom: "10px"}}>
      <div className="container">
        <div className="header-left">
          <div className="logo logo-transition">
            <a
              href="https://prodobro.org.ua/"
              title="РАЗОМ ЗА ДОБРО - Благодійний фонд"
              rel="home"
            >
          
              <img
                className="img-responsive standard-logo retina-logo" 
                
                width="512"
                height="512"
                src="//prodobro.org.ua/wp-content/uploads/2025/06/cropped-ChatGPT-Image-16-июн.-2025-г.-14_25_41-1-2.png"
                alt="РАЗОМ ЗА ДОБРО"
              />
            </a>
          </div>
        </div>

        <div className="header-right">
          <div id="main-menu" style={{
          marginLeft: "35em", 
          
        }}>
            <ul className="main-menu mega-menu menu-hover-line">
              <li className="menu-item menu-item-type-post_type menu-item-object-page narrow">
                <a href="https://prodobro.org.ua/about/">Про фонд</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page narrow">
                <a href="https://prodobro.org.ua/contacts/">Звʼязатись з нами</a>
              </li>
              <li className="lang-item lang-item-3 lang-item-en lang-item-first menu-item menu-item-type-custom menu-item-object-custom narrow">
                <a href="https://prodobro.org.ua/en/home-2/">English</a>
              </li>
              <li className="lang-item lang-item-6 lang-item-uk current-lang menu-item menu-item-type-custom menu-item-object-custom current_page_item menu-item-home active narrow">
                <a href="https://prodobro.org.ua/">Українська</a>
              </li>
            </ul>
          </div>

          <a aria-label="Mobile Menu" href="#" className="mobile-toggle">
            <i className="fas fa-bars"></i>
          </a>
        </div>
      </div>

      
    </div>
  </header>
  );
}

function MainContent() {
  return (
    <section className="main-content">
      <div className="container"> 
      <img
  src="https://prodobro.org.ua/wp-content/uploads/2024/10/fon-ukraina-3-1024x576.webp"
  alt="Квіти на фоні бліків"
  width="1114"
  height="349"
  style={{
    maxWidth: "100%",
    height: "auto",
    display: "block",
    margin: "0 auto",
    borderRadius: "0px"
  }}
/>

        
<h3 className="text-center">Вас вітає Фонд “РАЗОМ ЗА ДОБРО”</h3>

<p className="text1">Кожен із нас знає: Україна потребує захисту, адже ворог наступає. Проте допомогти можна не лише зі зброєю в руках. Підтримка кожного, незалежно від місця перебування, надзвичайно важлива. Українці завжди будуть вдячні за допомогу міжнародної спільноти в час найбільшої потреби.</p>
<p className="text1">Зробивши навіть невеликий внесок, ви допомагаєте рятувати життя. Кожна пожертва важлива. Поділіться цим із друзями та підтримайте разом з ними.</p>
<hr className="wp-block-separator has-alpha-channel-opacity" />

<p className="text1">Ваш внесок — це важлива частина спільної справи захисту незалежності та майбутнього України. Долучайтеся до великої справи просто зараз!</p> 
<p className="text1"> Необхідна сума для допомоги або реалізації проекту: 5 000 000 доларів (USD)
</p> 
<p className="text1">Терміни збору до 31.12.2026р </p> 
<p className="text1">Кожна людина, що здійснює пожертвування на адресу цього проекту, дає згоду на їх перерозподіл та використання в інших проектах.</p> 
<p className="text1">Кожен платник дає згоду на те що сума пожертвування не підлягає поверненню.

</p> 
<p className="text1">Наш проект це:</p> 
<p className="text1">Закупка та роздача харчових наборів. Закупка та роздача гігієнічних наборів. Закупка та роздача медикаментів, евакуація населення: як із зони бойових дій так і з інших населених пунктів в межах України, так і за кордон. Також організація декількох психологічно-розгрузочних кімнат для дітей як в Запоріжжі так і в більш віддалених населених пунктах. Проведення капітального та поточного ремонту нерухомого майна з подальшою передачею постраждалим.</p>  
<p className="text1">+380953903554 – Андрій Георгійович</p>  
<p className="text1">andrey3903554@gmail.com</p>  
<p className="text1">Адреса компанії:</p>  
<p className="text1">69035, УКРАЇНА, ОБЛ. ЗАПОРІЗЬКА, М. ЗАПОРІЖЖЯ, ВУЛ. ПЕРЕМОГИ, Б. 63, КВ. 2.</p> 
<p className="text1">Залишок коштів піде на придбання транспорту,для послуг з перевезення пасажирів.</p>


        {/* Додайте інші блоки тексту */}  
        <h2 className="wp-block-heading has-text-align-center" style={{paddingTop: "10px"}}><strong>Пожертвувати:</strong></h2>
        <div className="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-16018d1d wp-block-buttons-is-layout-flex">
<div className="wp-block-button"><a className="wp-block-button__link wp-element-button" href="https://www.citidirect.com/cdhome">CITYBANK</a></div>



<div className="wp-block-button is-style-fill"><a className="wp-block-button__link wp-element-button" href="https://www.liqpay.ua/uk/checkout/i30888415797">КАРТКОЮ</a></div>

<div className="wp-block-button"><a className="wp-block-button__link wp-element-button" href="https://www.bny.com/corporate/global/en/solutions/treasury-services.html">THE BANK OF NEW YORK</a></div> 

</div>  
<h3 className="wp-block-heading has-text-align-center" style={{paddingTop: "40px"}}><strong>Приват24</strong></h3> 
<img decoding="async"  width="248" height="300" style={{alignItems: "center", marginLeft: '41em'}} src="https://prodobro.org.ua/wp-content/uploads/2025/06/2025-06-16-12.05.30-248x300.jpg" alt="" className="wp-image-89"></img> 
<img decoding="async" width="298" height="300"   src="https://prodobro.org.ua/wp-content/uploads/2025/06/Снимок-экрана-2025-06-16-в-14.08.54-298x300.png" alt="" className="wp-image-96" style={{width:"450px" , height:"auto", alignItems: "center", marginLeft: "35em", marginBottom: "40px"}}></img>
<div className="footer-wrapper">																									
							<div id="footer" className="footer footer-1">
	

	<div className="container">
				<div className="footer-left">
							<span className="logo">
					<a href="https://prodobro.org.ua/" title="РАЗОМ ЗА ДОБРО - Благодійний фонд">
					</a>
				</span>
						<span className="footer-copyright">© Copyright 2024. All Rights Reserved.</span>		</div>
		
		
			</div>
</div>
</div>
												
					
				</div>


</section>
); 
};