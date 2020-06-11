import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import m from './Modal.module.css';

const Example = (props) => {
    const [show, setShow] = useState(false);
    const [show2, setShowDel] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseDel = () => setShowDel(false);
    const handleShowDel = () => setShowDel(true);

    let newNewsElement = React.createRef();

    let onUpdateNews = () => {
        props.updateNews();
        handleClose();
      }

    let onNewsChange = () => {
        let text = newNewsElement.current.value; 
        props.updateNewsText(text);
        
      }

      let onDeleteNews = () => {
        props.deleteNews();
        handleCloseDel();
      }

    return (
        <>
            <div className={m.container}>
                <Button className={m.btn} variant="primary" onClick={handleShow}>
                    Добавить
                </Button>
                <Button className={m.btn} variant="primary" onClick={handleShow}>
                    Изменить
                </Button>
                <Button className={m.btn} variant="primary" onClick={handleShowDel}>
                    Удалить  
                </Button>
            </div>
            
            <Modal show={show2} onHide={handleCloseDel}>
                <Modal.Header closeButton>
                    <Modal.Title>Новость</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Удалить Новость?
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDel}>Отмена</Button>
                <Button variant="primary" onClick={onDeleteNews}>Применить</Button>
                </Modal.Footer>
            </Modal>
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Новость</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={'form-group'}>
                        <textarea className={'form-control'}
                            onChange={onNewsChange}
                            ref={newNewsElement}
                            value={props.newNewsText}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Отмена</Button>
                <Button variant="primary" onClick={onUpdateNews}>Применить</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example