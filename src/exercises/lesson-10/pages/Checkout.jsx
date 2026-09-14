import { useNavigate } from 'react-router';

export default function Checkout() {
  const BASE = '/lessons/lesson-10';
  const navigate = useNavigate();

  function handleGoHome() {
    navigate(BASE);
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <section>
      <h2>Checkout</h2>
      <p>This page exists to practice useNavigate().</p>

      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={handleGoHome}>Go Home</button>
        <button onClick={handleBack}>Back</button>
      </div>
    </section>
  );
}
