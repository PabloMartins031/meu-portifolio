from sqlalchemy import Column, Integer, String, Text

from database import Base


class ContatoModel(Base):

    __tablename__ = "contatos"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100))
    email = Column(String(150))
    mensagem = Column(Text)