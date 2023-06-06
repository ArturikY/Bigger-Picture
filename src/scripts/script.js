gsap.registerPlugin(ScrollTrigger)

/*!--АНИМАЦИИ ШАПКИ--start--!*/

gsap.from('.left_text_header', { duration: 0.5, delay: 1, x: -1200 })
gsap.from('.right_text_header', { duration: 0.5, delay: 1, x: 1200 })
gsap.fromTo(
	'.line_header',
	{ width: 0, height: 0 },
	{ duration: 1, delay: 2, width: 1, height: 100 }
)
gsap.fromTo(
	'.under_text_header',
	{ opacity: 0, y: 50 },
	{ opacity: 1, y: 0, delay: 3 }
)

/*!--АНИМАЦИИ ШАПКИ--end--!*/

/*!--АНИМАЦИИ СЕКЦИИ 1--start--!*/

gsap.fromTo(
	'.title_section_1',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.title_section_1',
			start: '200px bottom',
			marks: true,
		},
	}
)

gsap.fromTo(
	'.text_section_1',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.text_section_1',
			start: '300px bottom',
		},
	}
)

gsap.fromTo(
	'.link_section_1',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.link_section_1',
			start: '200px bottom',
		},
	}
)

gsap.fromTo(
	'.picture_1',
	{ x: 100, opacity: 0 },
	{
		x: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.text_section_1',
			start: '200px bottom',
		},
	}
)

/*!--АНИМАЦИИ СЕКЦИИ 1--end--!*/

/*!--АНИМАЦИИ СЕКЦИИ 2--start--!*/

gsap.from('.left_text_2', {
	duration: 0.5,
	delay: 1,
	x: -1600,
	ease: 'power4.out',
	scrollTrigger: '.left_text_2',
})
gsap.from('.right_text_2', {
	duration: 0.5,
	delay: 1,
	x: 1600,
	scrollTrigger: '.right_text_2',
})

gsap.fromTo(
	'#str_2__1',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.5,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '#str_2__1',
			start: '200px bottom',
		},
	}
)

gsap.fromTo(
	'#str_2__2',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.5,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '#str_2__2',
			start: '200px bottom',
		},
	}
)

gsap.fromTo(
	'#str_2__3',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.5,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '#str_2__3',
			start: '200px bottom',
		},
	}
)

gsap.fromTo(
	'#str_2__4',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.5,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '#str_2__4',
			start: '200px bottom',
		},
	}
)

/*!--АНИМАЦИИ СЕКЦИИ 2--end--!*/

/*!--АНИМАЦИИ СЕКЦИИ 3--start--!*/

gsap.fromTo(
	'.title_row_3',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.title_row_3',
			start: '200px bottom',
			marks: true,
		},
	}
)

gsap.fromTo(
	'.text_row_3',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.text_row_3',
			start: '200px bottom',
			marks: true,
		},
	}
)

gsap.fromTo(
	'.picture_3',
	{ x: -100, opacity: 0 },
	{
		x: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.text_row_3',
			start: '200px bottom',
		},
	}
)

gsap.fromTo(
	'#text_str_3_1',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '#text_str_3_1',
			start: '200px bottom',
			marks: true,
		},
	}
)

gsap.fromTo(
	'#text_str_3_2',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '#text_str_3_2',
			start: '200px bottom',
			marks: true,
		},
	}
)

gsap.fromTo(
	'#text_str_3_3',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '#text_str_3_3',
			start: '200px bottom',
			marks: true,
		},
	}
)

gsap.fromTo(
	'#text_str_3_4',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '#text_str_3_4',
			start: '200px bottom',
			marks: true,
		},
	}
)

/*!--АНИМАЦИИ СЕКЦИИ 3--end--!*/

/*!--АНИМАЦИИ СЕКЦИИ 4--start--!*/

gsap.fromTo(
	'#title_row_4_1',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '#title_row_4_1',
			start: '200px bottom',
			marks: true,
		},
	}
)

gsap.fromTo(
	'#title_row_4_2',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '#title_row_4_2',
			start: '200px bottom',
			marks: true,
		},
	}
)

gsap.fromTo(
	'#title_row_4_3',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '#title_row_4_3',
			start: '200px bottom',
			marks: true,
		},
	}
)

gsap.fromTo(
	'#title_row_4_4',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '#title_row_4_4',
			start: '200px bottom',
			marks: true,
		},
	}
)

gsap.fromTo(
	'.row_4__2',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '#str_4_l',
			start: '200px bottom',
			marks: true,
		},
	}
)

gsap.fromTo(
	'.awards_block',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.title_block_4',
			start: '200px bottom',
			marks: true,
		},
	}
)

/*!--АНИМАЦИИ СЕКЦИИ 4--end--!*/

/*!--АНИМАЦИИ СЕКЦИИ 5--start--!*/

gsap.fromTo(
	'.title_section_5',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.title_section_5',
			start: '200px bottom',
			marks: true,
		},
	}
)

gsap.fromTo(
	'.company_block',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.company_block',
			start: '200px bottom',
			marks: true,
		},
	}
)

/*!--АНИМАЦИИ СЕКЦИИ 4--end--!*/
