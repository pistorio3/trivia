export default async function getAPIQuiz(token) {
  return fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
    .then((response) => response.json())
    .catch((error) => error);
}

// const getAPIQuiz = () => {
//   const local = localStorage.getItem('token');
//   const urlQuiz = `https://opentdb.com/api.php?amount=5&token=${local}`;

//   const fetchQuiz = fetch(urlQuiz)
//     .then((response) => (
//       response
//         .json()
//         .then((json) => json)
//         .catch((error) => error)
//     ));
//   return fetchQuiz;
// };

// export default getAPIQuiz;
