const str = ` 
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick vrown fox jumps over the lazy dog.
abbcccdddd
// 동해물과_백두산이 마르고 닳도록
` // '' 나 "" 는 중간에 줄바꿈을 할수 없는데 ``백틱기호는 그게 가능함

// const regexp = new RegExp('the', 'g')  //g플래그 the가 있는만큼 검색해낸다
// const regexp = new RegExp('the', 'gi')  // i : 대문자 소문자 구분하지 않고 찾아낸다
// const regexp =/the/gi   //리터럴 방식으로 작성
//console.log(str.match(regexp))



// const regexp =/fox/gi
// // console.log(regexp.test(str))
// // console.log(str.replace(regexp, 'AAA'))
// str=str.replace(regexp, 'AAA')
// console.log(str)

// const regexp = /the/gi
// console.log(str.match(regexp))

// console.log(str.match(/\.$/gim))

// console.log(
//   str.match(/d$/gm)
// )

// console.log(
  // str.match(/h..p/g)
  // str.match(/fox|dog/g)
  // str.match(/http?/g)
  // str.match(/\w{2,3}/g)  //\w : 숫자를 포함한 알파벳을 의미함
  //str.match(/\b\w{2,3}\b/g)  //앞뒤로 숫자가 아닌 부분의 경계를 가진
// )

// console.log(
//   // str.match(/[fox]/g)
//   // str.match(/[0-9]{1,}/g)
//   str.match(/[가-힣]{1,}/g)
// )

// const h=`  the hello world  ! 

// `

// console.log(
//   // str.match(/\bf\w{1,}\b/g)
//   // str.match(/\d{1,}/g)
//   // str.match(/\s/g)
//   h.replace(/\s/g, '')
// )

console.log(
  // str.match(/.{1,}(?=@)/g)
  str.match(/(?<=@).{1,}/g)
)