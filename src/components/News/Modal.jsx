import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import m from './Modal.module.css';

const Example = (props) => {
    const [add, setShow] = useState(false);
    const [deleted, setShowDel] = useState(false);
    const [chenge, setChenge,] = useState(false);

    const handleCloseAdd = () => setShow(false);
    const handleShowAdd = () => {
        setShow(true);
        props.updateNewsText("");
    };


    const handleCloseDel = () => setShowDel(false);
    const handleShowDel = () => setShowDel(true);

    const handleCloseChenge = () => setChenge(false);
    const handleShowChenge = () => setChenge(true);

    let newNewsElement = React.createRef();

    const onAddNews = () => {
        props.addNews();
        handleCloseAdd();
    }

    let onUpdateNews = () => {
        props.updateNews();
        handleCloseChenge();
    }

    let onNewsChange = () => {
        let text = newNewsElement.current.value;
        props.updateNewsText(text);

    }

    let onDeleteNews = () => {
        props.deleteNews();
        handleCloseDel();
    }

    const chengModalBody = () => {
        if (props.selectedID === null) {
            return (
                <div className={'form-group'}>
                    Вы не выбрали новость!!!
                </div>
            )
        } else {
            return (
                <div className={'form-group'}>
                    <textarea className={'form-control'}
                        onChange={onNewsChange}
                        ref={newNewsElement}
                        value={props.newNewsText}
                    />
                </div>

            )
        }

    }

    const chengModalFooter = () => {
        return props.selectedID === null ?
            <>
                <Button variant="secondary" onClick={handleCloseChenge}>Отмена</Button>
            </> :
            <>
                <Button variant="secondary" onClick={handleCloseChenge}>Отмена</Button>
                <Button variant="primary" onClick={onUpdateNews}>Применить</Button>
            </>
    }

    return (
        <>
            <div className={m.container}>
                <Button className={m.btn} variant="primary" onClick={handleShowAdd}>
                    Добавить
                </Button>
                <Button className={m.btn} variant="primary" onClick={handleShowChenge}>
                    Изменить
                </Button>
                <Button className={m.btn} variant="primary" onClick={handleShowDel}>
                    Удалить
                </Button>
            </div>

            <Modal show={add} onHide={handleCloseAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>Новая новость</Modal.Title>
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
                    <Button variant="secondary" onClick={handleCloseAdd}>Отмена</Button>
                    <Button variant="primary" onClick={onAddNews}>Применить</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={chenge} onHide={handleCloseChenge}>
                <Modal.Header closeButton>
                    <Modal.Title>Изменить новость</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {chengModalBody()}
                </Modal.Body>
                <Modal.Footer>
                    {chengModalFooter()}
                </Modal.Footer>
            </Modal>

            <Modal show={deleted} onHide={handleCloseDel}>
                <Modal.Header closeButton>
                    <Modal.Title>Удаление</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Удалить Новость?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDel}>Отмена</Button>
                    <Button variant="primary" onClick={onDeleteNews}>Применить</Button>
                </Modal.Footer>
            </Modal>


        </>
    );
}

export default Example