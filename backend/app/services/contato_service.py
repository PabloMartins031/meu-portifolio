from sqlalchemy.orm import Session

from app.models.contato import ContatoModel
from app.schemas.contato import Contato


def salvar_contato(db: Session, contato: Contato):

    novo = ContatoModel(
        nome=contato.nome,
        email=contato.email,
        mensagem=contato.mensagem
    )

    db.add(novo)
    db.commit()
    db.refresh(novo)

    return novo