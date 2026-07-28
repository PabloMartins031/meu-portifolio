from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from app.schemas.contato import Contato
from app.services.contato_service import salvar_contato

router = APIRouter(
    prefix="/contato",
    tags=["Contato"]
)


def get_db():
    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@router.post("/")
def enviar_contato(
    contato: Contato,
    db: Session = Depends(get_db)
):

    salvar_contato(db, contato)

    return {
        "mensagem": "Contato enviado com sucesso!"
    }