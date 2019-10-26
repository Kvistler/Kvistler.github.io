
function functionS () {
	s = 'Baм подобається: \r\n'
}
function functionS2 () {
	s = ''
	sum = 0
	sum1 = 0
	sum2 = 0
	s1 = ''
}
function square (a, h) {
	s = (a * h) / 2
	alert('Площа прямокутного трикутника = ' + s)
	return s
}
function squareRec (obj) {
	obj.res.value = obj.num1.value * obj.num1.value
}
function squareTriangle (obj) {
	length12 = Math.sqrt(Math.pow((obj.x1.value - obj.x2.value), 2) + Math.pow((obj.y1.value - obj.y2.value), 2))
	length23 = Math.sqrt(Math.pow((obj.x2.value - obj.x3.value), 2) + Math.pow((obj.y2.value - obj.y3.value), 2))
	length31 = Math.sqrt(Math.pow((obj.x3.value - obj.x1.value), 2) + Math.pow((obj.y3.value - obj.y1.value), 2))
	p = (length12 + length23 + length31) / 2
	obj.res.value = Math.sqrt(p * (p - length12) * (p - length23) * (p - length31))
}
function length0 (obj) {
	obj.res.value = Math.sqrt(Math.pow(obj.x1.value, 2) + Math.pow(obj.y1.value, 2))
}
function swap (obj) {
	temp = obj.x.value
	obj.x.value = obj.y.value
	obj.y.value = temp
}
function maxVal (obj) {
	a = Number(obj.num1.value)
	b = Number(obj.num2.value)
	c = Number(obj.num3.value)
	m = a
	if (b > m) { m = b }
	if (c > m) { m = c }
	obj.res.value = m
}
function maxCount (obj) {
	num1 = Number(obj.num1.value)
	num2 = Number(obj.num2.value)
	num3 = Number(obj.num3.value)
	num4 = Number(obj.num4.value)
	num5 = Number(obj.num5.value)
	maxnumber = Math.max(Math.max(num1, num2), Math.max(num3, Math.max(num4, num5)))
	obj.res.value = 0
	if (maxnumber == num1) { obj.res.value++ }
	if (maxnumber == num2) { obj.res.value++ }
	if (maxnumber == num3) { obj.res.value++ }
	if (maxnumber == num4) { obj.res.value++ }
	if (maxnumber == num5) { obj.res.value++ }
}
function triangle (obj) {
	length1 = Number(obj.length1.value)
	length2 = Number(obj.length2.value)
	length3 = Number(obj.length3.value)
	if (length1 + length2 > length3 && length2 + length3 > length1 && length1 + length3 > length2) { obj.res.value = 'Можливо побудувати' } else { obj.res.value = 'Неможливо побудувати' }
}
function quadrant (obj) {
	x = Number(obj.x.value)
	y = Number(obj.y.value)
	if (x > 0 && y > 0) { obj.res.value = '1 чверть' } else if (x < 0 && y > 0) { obj.res.value = '2 чверть' } else if (x < 0 && y < 0) { obj.res.value = '3 чверть' } else if (x > 0 && y > 0) { obj.res.value = '4 чверть' } else { obj.res.value = 'Точка лежить на осі' }
}
function chan (obj) {
	r1 = Number(obj.a1.value)
	r2 = Number(obj.a2.value)
	if ((r1 < 1) || (r1 > 3) || (r2 < 1) || (r2 > 3)) { alert('Неправильно задані номери зображень!') } else {
		z = document.images[r1 - 1].src
		document.images[r1 - 1].src = document.images[r2 - 1].src
		document.images[r2 - 1].src = z
	}
}
function img (n, action) {
	if (action) {
		document.images[n - 1].src = 'wpch' + (n - 3) + '.png'
	} else {
		document.images[n - 1].src = 'pch' + (n - 3) + '.png'
	}
}
function picturePick (n) {
	if (n == 7) {
		document.images[9].src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Un1.svg/1200px-Un1.svg.png'
	} else if (n == 8) {
		document.images[9].src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Deux.svg/1024px-Deux.svg.png'
	} else if (n == 9) {
		document.images[9].src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Trois.svg/1024px-Trois.svg.png'
	}
}
function zoom (action) {
	if (action) {
		document.images[10].width = 400
	} else {
		document.images[10].width = 200
	}
}
function menu (n, action) {
	if (action) {
		document.getElementById('aa' + n).id = 'menu_selected'
	} else {
		document.getElementById('menu_selected').id = 'aa' + n
	}
}
function test (k) {
	a = form1.data.value
	if (a != '') { form1.res.value = k * Math.pow(a, 2) } else { alert('Введіть значення!') }
}
function chPict (obj) {
	if ((obj.elements[0]).checked) { document.mypict.align = 'left' } else { document.mypict.align = 'right' }
}
function reset () {
	document.mypict.align = 'left'
}
function lineChange (obj) {
	if (obj.data.value != '') {
		if ((obj.elements[1]).checked) { document.getElementById('line').width = Number(document.getElementById('line').width) + Number(obj.data.value) } else { document.getElementById('line').size = Number(document.getElementById('line').size) + Number(obj.data.value) }
	} else { alert('Введіть значення!') }
}
function resetLine () {
	document.getElementById('line').width = 1500
	document.getElementById('line').size = 0
}
function submitForm (obj) {
	if (obj.person_name.value != '' && obj.age.value != '') {
		personName = obj.person_name.value
		if (!isNaN(obj.age.value) && Number(obj.age.value) >= 0 && Number(obj.age.value) <= 200) {
			age = Number(obj.age.value)
			flag = 1
		} else {
			alert('Введіть коректні дані')
			flag = 0
		}

		radSex = document.getElementsByName('f4')
		for (i = 0; i < radSex.length; i++) {
			if (radSex[i].checked) {
				sex = radSex[i].value
			}
		}

		radStatus = document.getElementsByName('f5')
		for (i = 0; i < radStatus.length; i++) {
			if (radStatus[i].checked) {
				status0 = radStatus[i].value
			}
		}

		if (flag) { alert('ПІБ: ' + personName + ', ' + sex + ', ' + age + ' років, ' + status0 + '.') }
	} else {
		alert('Заповніть всі поля!')
	}
}
function set (vch) {
	s = s + vch + '\r\n'
	document.form1.area.value = s
}
function grant () {
	d = document
	k = 0
	if ((d.form2.elements[0]).checked) { k = k + Number(d.form2.elements[0].value) }
	if ((d.form2.elements[1]).checked) { k = k + Number(d.form2.elements[1].value) }
	if ((d.form2.elements[2]).checked) { k = k + Number(d.form2.elements[2].value) }
	form2.ww.value = 'Ваша винагорода ' + k + ' y.e.'
}
function price () {
	d = document
	k = 0
	if ((d.form3.elements[0]).checked) { k = k + Number(d.form3.elements[0].value) }
	if ((d.form3.elements[1]).checked) { k = k + Number(d.form3.elements[1].value) }
	if ((d.form3.elements[2]).checked) { k = k + Number(d.form3.elements[2].value) }
	if ((d.form3.elements[3]).checked) { k = k + Number(d.form3.elements[3].value) }
	if ((d.form3.elements[4]).checked) { k = k + Number(d.form3.elements[4].value) }
	if ((d.form3.elements[5]).checked) { k = k + Number(d.form3.elements[5].value) }
	if (!isNaN(d.form3.course_length.value) && Number(d.form3.course_length.value) > 0) {
		k = k + Number(d.form3.course_length.value)
		flag = 1
	} else {
		alert('Коректно заповніть поле!')
		flag = 0
	}

	if (flag) {
		form3.ww.value = 'Ваша вартість ' + k + ' y.e.'
	}
}
function gr (obj, m) {
	r = 100 * (Number(((obj.elements[0])[m]).value) + 1)
	s += ((obj.elements[0])[m]).text + '\r\n'
	obj.restext.value = s
	sum += r
	obj.res.value = r
}
function eq () {
	q = test.question.value
	a = test.answer.value
	if (a == q) { sum1 += 1 }
}
function result () {
	document.test.res.value = sum1
}
function changeBg (color, mode, image) {
	if (mode == 1) {
		document.getElementById('chosen_table').style.backgroundColor = color
	} else {
		document.getElementById('chosen_table').style.backgroundImage = "url('" + image + "')"
	}
}
function gr1 (obj, m) {
	r = 100 * (Number(((obj.elements[0])[m]).value) + 1)
	s1 += ((obj.elements[0])[m]).text + '\r\n'
	obj.restext.value = s1
	sum2 += r
	obj.res.value = r
}
function nod (obj) {
	n = obj.num1.value
	m = obj.num2.value
	p = n % m
	while (p != 0) {
		n = m
		m = p
		p = n % m
	}
	obj.res.value = m
}
function dosk () {
	n = parseInt(prompt('Вкажіть натуральне число', 6))
	sum = n - 1
	temp = n
	for (i = 2; n > 1;) {
		if (!(n % i)) {
			sum -= i
			n = n / i
		} else i++
	}
	if (!sum) {
		alert('Число: ' + temp + ' є досконалим')
	} else {
		alert('Число: ' + temp + ' не є досконалим')
	}
}
function propObj (obj) {
	result0 = ''
	for (i in obj) {
		result0 += obj.data.value + '.' + i + ' = ' + (obj.data)[i] + '\r\n'
	}
	result0 += '\n\r'
	form2.data.value = result0
}
function reverseStr (str) {
	form3.numres.value = str.split('').reverse().join('')
}
function tickets (obj) {
	arr = obj.datatickets.value.split('\n')
	count = 0
	for (i = 0; i < arr.length; i++) {
		if (Number(arr[i][0]) + Number(arr[i][1]) + Number(arr[i][2]) == Number(arr[i][3]) + Number(arr[i][4]) + Number(arr[i][5])) { count++ }
	}
	obj.restickets.value = count
}
function divisors (value) {
	res = ''
	for (i = 1; i <= value; i++) {
		if (value % i == 0) {
			res = res + i + ' '
		}
	}
	form5.numres.value = res
}
function c1 (obj) {
	t = new Date()
	h = t.getHours()
	m = t.getMinutes()
	s = t.getSeconds()
	res = ''
	if (h < 10) { res += '0' + h } else { res += h }
	if (m < 10) { res += ':0' + m } else { res += ':' + m }
	if (s < 10) { res += ':0' + s } else { res += ':' + s }
	obj.rest.value = res
}
function def13 (obj) {
	t = new Date()
	c = ''
	y = Number(obj.fye.value)
	for (i = 0; i <= 11; i++) {
		t.setYear(y)
		t.setMonth(i)
		t.setDate(13)
		if (t.getDay() == 5) {
			с = c + fmon(i) + '\r\n'
		}
	}
	obj.res.value = с
}
function fmon (mont) {
	switch (mont) {
	case 0: s = 'січень'; break
	case 1: s = 'лютий'; break
	case 2: s = 'березень'; break
	case 3: s = 'квітень'; break
	case 4: s = 'травень'; break
	case 5: s = 'червень'; break
	case 6: s = 'липень'; break
	case 7: s = 'серпень'; break
	case 8: s = 'вересень'; break
	case 9: s = 'жовтень'; break
	case 10: s = 'листопад'; break
	case 11: s = 'грудень'; break
	}
	return s
}
Date.prototype.getWeek = function () {
	var onejan = new Date(this.getFullYear(), 0, 1)
	return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7)
}
function getWeek0 (obj) {
	t = new Date()
	dateArr = obj.fye.value.split('-')
	t.setYear(Number(dateArr[0]))
	t.setMonth(Number(dateArr[1]) - 1)
	t.setDate(Number(dateArr[2]))
	obj.res.value = t.getWeek()
}
function getZodiacSign (obj) {
	t = new Date()
	dateArr = obj.fye.value.split('-')
	month = Number(dateArr[1])
	day = Number(dateArr[2])
	var zodiacSigns = {
		capricorn: 'Козеріг',
		aquarius: 'Водолій',
		pisces: 'Риби',
		aries: 'Овен',
		taurus: 'Телець',
		gemini: 'Близнюки',
		cancer: 'Рак',
		leo: 'Лев',
		virgo: 'Діва',
		libra: 'Терези',
		scorpio: 'Скорпіон',
		sagittarius: 'Стрілець'
	}
	if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
		obj.res.value = zodiacSigns.capricorn
	} else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
		obj.res.value = zodiacSigns.aquarius
	} else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
		obj.res.value = zodiacSigns.pisces
	} else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
		obj.res.value = zodiacSigns.aries
	} else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
		obj.res.value = zodiacSigns.taurus
	} else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
		obj.res.value = zodiacSigns.gemini
	} else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
		obj.res.value = zodiacSigns.cancer
	} else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
		obj.res.value = zodiacSigns.leo
	} else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
		obj.res.value = zodiacSigns.virgo
	} else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
		obj.res.value = zodiacSigns.libra
	} else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
		obj.res.value = zodiacSigns.scorpio
	} else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
		obj.res.value = zodiacSigns.sagittarius
	}
}
function getEasternYear (obj) {
	t = new Date()
	dateArr = obj.fye.value.split('-')
	year = Number(date_arr[0])
	yearZero = (year % 60) - 4
	yearTwelve = ((year % 60) - 4) % 12
	s = 'Рік '
	if (yearZero >= 0 && yearZero < 12) {
		s += 'зеленого ' + animal(year_twelve)
	} else if (yearZero >= 12 && yearZero < 24) {
		s += 'червоного ' + animal(year_twelve)
	} else if (yearZero >= 24 && yearZero < 36) {
		s += 'жовтого ' + animal(year_twelve)
	} else if (yearZero >= 36 && yearZero < 48) {
		s += 'білого ' + animal(year_twelve)
	} else if (yearZero >= 48 && yearZero < 60) {
		s += 'чорного ' + animal(year_twelve)
	}
	obj.res.value = s
}
function animal (yearTwelve) {
	if (yearTwelve == 0) {
		return 'пацюка'
	} else if (yearTwelve == 1) {
		return 'корови'
	} else if (yearTwelve == 2) {
		return 'тигра'
	} else if (yearTwelve == 3) {
		return 'зайця'
	} else if (yearTwelve == 4) {
		return 'дракона'
	} else if (yearTwelve == 5) {
		return 'змії'
	} else if (yearTwelve == 6) {
		return 'коня'
	} else if (yearTwelve == 7) {
		return 'вівці'
	} else if (yearTwelve == 8) {
		return 'мавпи'
	} else if (yearTwelve == 9) {
		return 'курки'
	} else if (yearTwelve == 10) {
		return 'собаки'
	} else if (yearTwelve == 11) {
		return 'свині'
	}
}
function tTest (s) {
	sres = 'Прочитаний текст:' + ' \r\n' + s + '\r\n' + 'Текст в стовпчик:' + '\r\n'
	cur = ''
	for (i = 0; i <= s.length - 1; i += 1) {
		c = s.charAt(i)
		cur += c + '\r\n'
	}
	sres += cur
	return sres
}
function numWord (obj) {
	h = obj.data.value
	s = obj.textin.value
	s = ' ' + s + ' '
	h = ' ' + h + ' '
	m = h.length
	res = 0
	i = 0
	while (i <= s.length - 1) {
		ch = s.substr(i, m)
		if (ch == h) {
			res += 1
			i = i + m - 1
		} else {
			i++
		}
	}
	obj.result.value = res
}
function wordCount (obj) {
	obj.result.value = obj.textin.value.split(' ').length
}
function wordChange (obj) {
	arr = obj.textin.value.split(' ')
	fWord = obj.data1.value
	rWord = obj.data2.value
	str = ''
	for (i = 0; i < arr.length; i++) {
		if (arr[i] === fWord) {
			str += rWord + ' '
		} else {
			str += arr[i] + ' '
		}
	}
	obj.textin.value = str
}
function spcRep (obj) {
	str = obj.textin.value.split(' ')
	sres = ''
	for (i = 0; i < str.length; i++) {
		str[i] = str[i].trim()
		sres += str[i]
		if (str[i] != '') { sres += ' ' }
	}
	obj.textin.value = sres
}
function mult () {
	imgArray = new Array()
	for (i = 0; i < 4; i++) {
		img_array[i] = new Image(100, 100)
	}
	img_array[0].src = 'pch1.png'
	img_array[1].src = 'pch2.png'
	img_array[2].src = 'pch3.png'
	img_array[3].src = 'pch4.png'
	p = -1
}
function s0 () {
	p = p + 1
	document.images[0].src = img_array[p].src
	setTimeout(s(), 100)
	if (p == 3) p = -1
}
function positiveNums (obj) {
	arr = obj.data.value.split(' ')
	count = 0
	for (i = 0; i < arr.length; i++) {
		if (Number(arr[i]) > 0) {
			count++
		}
	}
	obj.result.value = count
}
function maxElement (obj) {
	arr = obj.data.value.split(' ')
	maxEl = Number(arr[0])
	for (i = 0; i < arr.length; i++) {
		if (Number(arr[i]) > maxEl) {
			maxEl = Number(arr[i])
		}
	}
	obj.result.value = maxEl
}
function test1 (form) {
	if (form.text1.value == '') { alert('Не залишайте поле пустим!') } else {
		alert('Hi, ' + form.text1.value + '! Форму заповнено коректно!')
	}
}
function test2 (form) {
	if (form.text2.value == '' || form.text2.value.indexOf('@', 0) == -1) {
		alert('Неправильно введена адреса e-mail!')
	} else {
		alert('OK!')
	}
}
function test3 (input) {
	if (isNaN(Number(input))) {
		alert('Номер не коректний.')
	} else {
		alert('Номер коректний!')
	}
}
