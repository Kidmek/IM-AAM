import style from './page.module.css'
import { terms } from '@/constants/strings/terms'

export default function TermsAndConditions() {
  return (
    <div className={style.termsContainer}>
      <div className={style.termBlock}>
        {terms.map((item, index) => {
          return (
            <div
              key={index}
              className={`${style.singleTerm} ${
                index % 2 !== 0 ? style.reversed : ''
              } ${!item.content && style.termHeader}`}
            >
              <div className={style.textContainer}>
                {item.content ? (
                  <>
                    <h1 className={style.header}>{item.title}</h1>
                    <p className={style.content}>{item.content}</p>
                  </>
                ) : (
                  item.title
                )}
              </div>
              <img
                src={item.image}
                alt='Image'
                style={{
                  width: 'auto',
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
