function Modal({ title, msg, onClose, onConfirm}){
    return(
      <div style={{
        position: 'fixed',
        top: '25%',
        left: 'calc((100% - 23vw) /2)',
        zIndex: 999999,
        backgroundColor: 'whitesmoke',
        borderRadius: '10px',
        width: "20rem",
        boxShadow: "0 0 0 50vmax rgba(0,0,0,.5)"
    }}>
        <div className="header" style={{ borderBottom: '1px solid gray', padding: '5px 10px' }}>
            <div style={{ position: 'relative' }}>
                <p style={{ fontWeight: 700 }}>{title}</p>
                <div style={{
                    position: 'absolute',
                    top: -10,
                    right: 0,
                    cursor: 'pointer',
                    width: '22px',
                    height: '22px',
                    border: '1px solid gray',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '15px',
                    borderRadius: '50%',
                    marginTop: '10px',
                    paddingBottom:'3px'
                }} onClick={onClose}>
                    x
                </div>
            </div>
        </div>
        <div className="body" style={{
            padding: '20px 10px',height: '10vh'
        }}>
            {msg}
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '10px auto'
        }}>
            <button style={{
                marginRight: '10px',
                width: '72px',
                maxWidth: '72px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '4pt 10pt',
                fontWeight: 600,
                backgroundColor: 'gray',
                borderColor: 'gray',
                color: 'white',
                cursor: 'pointer',
                borderRadius:'5px',
                marginLeft: '1.5rem'
            }}
                onClick={onClose}>
                Close
            </button>
            <button style={{
                marginRight: '20px',
                width: '72px',
                maxWidth: '72px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '4pt 10pt',
                fontWeight: 600,
                backgroundColor: 'red',
                borderColor: 'red',
                borderRadius: '5px',
                color: 'white',
                cursor: 'pointer'
            }} onClick={onConfirm}>
                OK
            </button>
        </div>
    </div>
  )
  }
  export default Modal;