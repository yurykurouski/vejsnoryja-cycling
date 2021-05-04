import React from 'react'
import Loader from "../../../common/loader/Loader"
import './main-page.css';

export default function MainPage() {
  return (
    <div className="content__main-page">

      <h3>Здесь карточки с готовыми событиями</h3>
      <Loader />

    </div>
  )
}
