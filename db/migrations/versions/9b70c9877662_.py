"""empty message

Revision ID: 9b70c9877662
Revises: f4fabea1686d
Create Date: 2017-02-10 12:15:14.189311

"""

# revision identifiers, used by Alembic.
revision = '9b70c9877662'
down_revision = 'f4fabea1686d'

from alembic import op
import sqlalchemy as sa
import geoalchemy2


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('space', sa.Column('position', geoalchemy2.types.Geometry(geometry_type='POINT', srid=7483), nullable=True))
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('space', 'position')
    ### end Alembic commands ###