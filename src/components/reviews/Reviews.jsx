import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'components/Api/Api'; 

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(movieId);
        const reviews = data.results;
        console.log('first', reviews);
        if (!reviews.length) {
          setError(`There are no reviews`);
        }
        setReviews(reviews);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchReviews();
  }, [movieId]);
  return (
    <div>
      {error && <p>Error: {error}</p>}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


// import { useState, useEffect } from 'react';
// import { useParams, Link, useHistory } from 'react-router-dom';
// import { getReviews } from 'components/Api/Api';

// export const Reviews = () => {
//   const { movieId } = useParams();
//   const [reviews, setReviews] = useState([]);
//   const [error, setError] = useState(null);
//   const history = useHistory();

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const data = await getReviews(movieId);
//         const reviews = data.results;

//         if (!reviews.length) {
//           setError('There are no reviews');
//         }

//         setReviews(reviews);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchReviews();
//   }, [movieId]);

//   const handleGoBack = () => {
//     history.goBack(); // Go back to the previous page
//   };

//   return (
//     <div>
//       {error && <p>Error: {error}</p>}
//       <button onClick={handleGoBack}>Go Back</button>
//       <ul>
//         {reviews.map((review) => (
//           <li key={review.id}>
//             <p>Author: {review.author}</p>
//             <p>{review.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };