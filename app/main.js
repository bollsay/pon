$(document).ready(function () {
	// ! multyLang btn
	$('.language--btn').click((e) => {
		e.preventDefault();
		$('.language-nav').toggleClass('language-nav-active');
	});
	$(document).click(e => {
		if ( 
			!$('.language--btn').is(e.target) && $('.language--btn').has(e.target).length == 0 &&
			!$('.language-nav').is(e.target) && $('.language-nav').has(e.target).length == 0
		) {
			$('.language-nav').removeClass('language-nav-active');
		}
	});
// ! multyLang
	$(document).ready(getLocalLang);
	
	let arrLang = {
		'ru': {
			// Index.html
			'i-0' : 'Профсоюз Образования',
			'i-1' : 'Новости',
			'i-2' : 'Нормативный правовой акт',
			'i-3' : 'Калькулятор профсоюза',
			'i-4' : 'Деятельность',
			'i-5' : 'О нас',
			'i-6' : 'Вопрос-ответ',
			'i-7' : 'Местоположение',
			'i-8' : 'Тех.Поддержка',
			// Act.html
			'act-0' : 'Нормативный правовой акт',
			'act-1' : 'Кодексы',
			'act-2' : 'Законы',
			'act-3' : 'Постановления Правительства РК',
			'act-4' : 'Распоряжение Президента РК',
			'act-5' : 'Распоряжение Премьер-Министра Республики',
			'act-6' : 'Приказы',
			// Activity.html
			'actty-0' : 'Деятельность',
			'actty-1' : 'Социальное партнерство',
			'actty-2' : 'Правовая служба',
			'actty-3' : 'Решения и постановления судов',
			'actty-4' : 'Охрана труда',
			'actty-5' : 'Профсоюзное обучение',
			'actty-6' : 'Международное сотрудничество',
			// Question-answer.html
			'qa-0' : 'Вопрос-ответ',
			'qa-1' : 'Аттестация',
			'qa-2' : 'Оплата труда',
			'qa-3' : 'Рабочее время и время отдыха',
			'qa-4' : 'Трудовой договор',
			'qa-5' : 'Прочее',
			'qa-6' : 'Задать вопрос',
			// qa > qs-question.html
			'qs-0' : 'Вопрос-ответ',
			'qs-1' : 'Имя:',
			'qs-2' : 'Номер телефона:',
			'qs-3' : 'Email адрес:',
			'qs-4' : 'Вопрос:',
			'qs-5' : 'Отправить',
		},
		'kz': {
			// Index.html
			'i-0' : 'Білім кәсіподағы',
			'i-1' : 'Жаңалықтар',
			'i-2' : 'Нормативтік құқықтық акт',
			'i-3' : 'Одақ калькуляторы',
			'i-4' : 'Деятельность',
			'i-5' : 'Қызметі',
			'i-6' : 'Сұрақ жауап',
			'i-7' : 'Орналасқан жері',
			'i-8' : 'Кері байланыс',
			// Act.html
			'act-0' : 'Нормативтік құқықтық акт',
			'act-1' : 'Кодтар',
			'act-2' : 'Заңдар',
			'act-3' : 'Қазақстан Республикасы Үкіметінің қаулылары',
			'act-4' : 'Қазақстан Республикасы Президентінің бұйрығы',
			'act-5' : 'Республика Премьер-Министрінің Бұйрығы',
			'act-6' : 'Тапсырыстар',
			// Activity.html
			'actty-0' : 'Қызметі',
			'actty-1' : 'Әлеуметтік серіктестік',
			'actty-2' : 'Заң қызметі',
			'actty-3' : 'Соттардың шешімдері мен өкімдері',
			'actty-4' : 'Еңбекті қорғау',
			'actty-5' : 'Кәсіподақтарды оқыту',
			'actty-6' : 'Халықаралық ынтымақтастық',
			// Question-answer.html
			'qa-0' : 'Сұрақ жауап',
			'qa-1' : 'Аттестаттау',
			'qa-2' : 'Жалақы',
			'qa-3' : 'Жұмыс уақыты және демалыс уақыты',
			'qa-4' : 'Еңбек шарты',
			'qa-5' : 'Басқа',
			'qa-6' : 'Сұрақ қою',
			// qa > qs-question.html
			'qs-0' : 'Сұрақ жауап',
			'qs-1' : 'Аты:',
			'qs-2' : 'Телефон нөмірі:',
			'qs-3' : 'Электрондық пошта:',
			'qs-4' : 'Сұрақ:',
			'qs-5' : 'Хат жіберу'
		}
	}

	$(function() {
		$('.translate').click(function(e) {
			e.preventDefault();
			let lang = $(this).attr('id');
			saveLocalLang(lang);
			$('.lang').each(function(index, item) {
				$(this).text(arrLang[lang][$(this).attr('key')]);
			});
		});
	});

	function saveLocalLang(language) { 
		let langs;
		if(localStorage.getItem('langs') === null){
			langs = [];
		} else {
			langs = JSON.parse(localStorage.getItem('langs'));
		}
		langs.push(language);
		localStorage.setItem('langs', JSON.stringify(langs));
	};

	function getLocalLang() { 
		let langs;
		if(localStorage.getItem('langs') === null){
			langs = [];
		} else {
			langs = JSON.parse(localStorage.getItem('langs'));
		}
		langs.forEach(function (language) {
			let lang = langs[langs.length - 1];
			setTimeout( () => {
				$('.lang').each(function(index, item) {
					$(this).text(arrLang[lang][$(this).attr('key')]);
				});
			}, 0);
		});
	};
	// tset

$('.an-0').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();	
	$('.ai-0').show();
})
$('.an-1').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();	
	$('.ai-1').show();
})
$('.an-2').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();	
	$('.ai-2').show();
})
$('.an-3').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();	
	$('.ai-3').show();
})
$('.an-4').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();	
	$('.ai-4').show();
})
$('.an-5').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();	
	$('.ai-5').show();
})
$('.an-6').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();	
	$('.ai-6').show();
})
$('.an-7').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();	
	$('.ai-7').show();
})
$('.an-8').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();	
	$('.ai-8').show();
})
$('.an-9').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();	
	$('.ai-9').show();
})
$('.an-10').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();
	$('.ai-10').show();
})
$('.an-11').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();
	$('.ai-11').show();
})
$('.an-12').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();
	$('.ai-12').show();
})
$('.an-13').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();
	$('.ai-13').show();
})
$('.an-14').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();
	$('.ai-14').show();
})
$('.an-15').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();
	$('.ai-15').show();
})
$('.an-16').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();
	$('.ai-16').show();
})
$('.an-17').click((e) => {
	e.preventDefault();
	$('.about-nav').hide();
	$('.ai-17').show();
})
	$("#phone").mask("+7 (999) 999-9999");
});