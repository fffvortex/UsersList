import React from 'react';

export const Success = ({ count}) => {
  function Declension(count){
    return count === 1? "Одному пользователю отправлено приглашение" : `Всем ${count} пользователям отправлено приглашение.`
  }

  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>{Declension(count)}</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};
