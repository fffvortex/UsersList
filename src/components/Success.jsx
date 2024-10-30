import React from 'react';

export const Success = ({ count, allInvites}) => {
  function Declension(count,allInvites){
    // return count === 1? "Одному пользователю отправлено приглашение" : `Всем ${count} пользователям отправлено приглашение.`
    if(count === 1){
      return 'Одному пользователю отправлено приглашение'
    }
    else if(count === allInvites){
      return 'Всем пользователям отправлено приглашение.'
    }
    else{
      return `${count} пользователям отправлено приглашение.`
    }
  }

  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>{Declension(count,allInvites)}</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};
