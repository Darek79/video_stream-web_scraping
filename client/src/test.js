var str =
  '\n<p class="title">Instagram Flexin: BRS Kash Announces \'Throat Baby\' Remix With City Girls &amp; DaBaby</p>\n<p class="sub-label">\neditorials\n| Jan 17, 2021 </p>\n';
str = str.split(/\>(.*?)\</g);
console.log(str[1]);
