// const ApiData = async() => {

//   let today = new Date();
//   let month = today.getMonth() + 1;
//   let day = today.getDate();
//   let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

//   let response = await fetch( url, {
//     method: 'get',
//           headers: {
//               'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJiMzZhYjNlOTY2MjU4MjA5YWY4OGEyZjdkYzFmZWZmNyIsImp0aSI6ImJlMmVjNzViNDcwZGYwZWExMjk0MGRiNGJmYmQ1MGQwZWJkNzM4NTdkMTNlZTRlOTMyMzAyNDMyNjczYzliODlkODFiOGQzOTNkNWZiMWE1IiwiaWF0IjoxNjc1MjQ3NDY1LjIzNjIzNSwibmJmIjoxNjc1MjQ3NDY1LjIzNjIzOSwiZXhwIjoxNjc1MjYxODY1LjIzMDA1MSwic3ViIjoiIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.GP4zwxWvhmi9mYq2I44rvr3W8MJJKVBqMhOqkSpa_RYDtH1GJ3z19hsXsnO71vbNikZhMqNbjQl_c_bpEMPtg1i77DYT4dXbzHi18IRTNeW8Uh6lfacIriditVdq3JtaQ_bow09Xzwet0ywDetBk-e1ojidP8qMKjK0LtH3y_zZGrYaKBpQB-1uc1gOHdwA5-IqVY1URsI98fnvqjYOGVVL4vQiJ9GbBF91VN7oSWoMH4KGeEDe_hv8KPok6dzqrxbyRi4SLOF9jI3wAwlN-rzRRKwE57RniYa3irmnWp1HmOTPa8r052fqehEvxNcLcKE3zlcf3-KyKZJTdD8W9ZzI1mkdUL9JBrnArTvMshyMGjlBGLj5OmgqfNG_NWEBixgV68VHXOOtmtcu1CBgGGv6OuGx6mNth2qEJsVKkE1sqpe97pOhiwatqYuHL-CEIWcD60cNK5CvD-Z5p2y8XgJ4XiqNcdW8eZv7r60nvGksmVdDkCoyTxILR6J4aNFjug7WEav3UpA--13fl0rKoHPKK7bgqaaWT0unjUjZgw7QCABGgzWoFD-GbEkzo50KZQXjCeHllabN55RFLd2vN7N_DIXQKKaBVu-xRt1jXvzblrvnFYCSTtXkTE7h4wXPlCbIcaUP8PhqcxdSY6h4bH4VU22b_wIf3m9Y2FpMB2Kw',
//               'Api-User-Agent': 'This Day in History (alexridge2309@gmail.com)'
//           }
//       }
//   )
//   response.json()
//   .then(console.log).catch(console.error);
// }

//   export default ApiData
