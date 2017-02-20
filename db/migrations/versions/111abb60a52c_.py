"""empty message

Revision ID: 111abb60a52c
Revises: None
Create Date: 2017-02-19 11:31:45.014516

"""

# revision identifiers, used by Alembic.
revision = '111abb60a52c'
down_revision = None

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql
import geoalchemy2
from geoalchemy2 import Geometry

def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.create_table('kropotkin',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('paragraph', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('main_type',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('profile',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=64), nullable=True),
    sa.Column('email', sa.String(length=20), nullable=True),
    sa.Column('full_name', sa.String(length=20), nullable=True),
    sa.Column('password', sa.String(length=20), nullable=True),
    sa.Column('additional_info', sa.String(length=20), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('additional_info'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('full_name'),
    sa.UniqueConstraint('password')
    )
    op.create_index(op.f('ix_profile_username'), 'profile', ['username'], unique=True)
    op.create_table('recurrence_rule',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('freq', sa.String(length=8), nullable=False),
    sa.Column('byDay', sa.String(length=35), nullable=True),
    sa.Column('byMonthDay', sa.String(length=200), nullable=True),
    sa.Column('byYearDay', sa.String(length=3078), nullable=True),
    sa.Column('byWeekNo', sa.String(length=353), nullable=True),
    sa.Column('byMonth', sa.String(length=29), nullable=True),
    sa.Column('until', sa.DateTime(), nullable=True),
    sa.Column('count', sa.Integer(), nullable=True),
    sa.Column('interval', sa.Integer(), nullable=False),
    sa.Column('bySetPos', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('schedule',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('space',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('position', geoalchemy2.types.Geometry(geometry_type='POINT', srid=7483), nullable=True),
    sa.Column('canonical_address', sa.Text(), nullable=False),
    sa.Column('alternate_names', postgresql.ARRAY(sa.Text()), nullable=True),
    sa.Column('notes', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('tag',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('event',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('dt_start', sa.DateTime(), nullable=True),
    sa.Column('dt_end', sa.DateTime(), nullable=True),
    sa.Column('tz_id', sa.String(), nullable=True),
    sa.Column('schedule_id', sa.Integer(), nullable=True),
    sa.Column('recurrence_rule_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['recurrence_rule_id'], ['recurrence_rule.id'], ),
    sa.ForeignKeyConstraint(['schedule_id'], ['schedule.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('guttersnipe',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('profile', sa.Integer(), nullable=True),
    sa.Column('schedule', sa.Integer(), nullable=True),
    sa.Column('is_admin', sa.Boolean(), nullable=True),
    sa.Column('created_on', sa.DateTime(), nullable=True),
    sa.Column('expiration_date', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['profile'], ['profile.id'], ),
    sa.ForeignKeyConstraint(['schedule'], ['schedule.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('subtype',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('main_type_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['main_type_id'], ['main_type.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('thing',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('main_type_id', sa.Integer(), nullable=False),
    sa.Column('description_how', sa.String(length=140), nullable=True),
    sa.Column('description_what', sa.String(length=140), nullable=True),
    sa.Column('notes', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['main_type_id'], ['main_type.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('time',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('schedule_id', sa.Integer(), nullable=True),
    sa.Column('notes', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['schedule_id'], ['schedule.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=255), nullable=True),
    sa.Column('password', sa.String(length=255), nullable=True),
    sa.Column('profile', sa.Integer(), nullable=True),
    sa.Column('schedule', sa.Integer(), nullable=True),
    sa.Column('is_admin', sa.Boolean(), nullable=True),
    sa.Column('created_on', sa.DateTime(), nullable=True),
    sa.Column('expiration_date', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['profile'], ['profile.id'], ),
    sa.ForeignKeyConstraint(['schedule'], ['schedule.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('username')
    )
    op.create_table('user_schedule',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('schedule', sa.Integer(), nullable=True),
    sa.Column('notes', sa.String(length=20), nullable=True),
    sa.ForeignKeyConstraint(['schedule'], ['schedule.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('followers',
    sa.Column('blocker_id', sa.Integer(), nullable=True),
    sa.Column('blocked_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['blocked_id'], ['guttersnipe.id'], ),
    sa.ForeignKeyConstraint(['blocker_id'], ['guttersnipe.id'], )
    )
    op.create_table('message',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('schedule', sa.Integer(), nullable=True),
    sa.Column('text', sa.String(length=2054), nullable=True),
    sa.Column('sender', sa.Integer(), nullable=True),
    sa.Column('recipient', sa.Integer(), nullable=True),
    sa.Column('sent', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['recipient'], ['guttersnipe.id'], ),
    sa.ForeignKeyConstraint(['schedule'], ['schedule.id'], ),
    sa.ForeignKeyConstraint(['sender'], ['guttersnipe.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('schedule_event_association',
    sa.Column('schedule_id', sa.Integer(), nullable=True),
    sa.Column('event_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['event_id'], ['event.id'], ),
    sa.ForeignKeyConstraint(['schedule_id'], ['schedule.id'], )
    )
    op.create_table('shareable',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('summary', sa.Text(), nullable=True),
    sa.Column('headline', sa.Text(), nullable=True),
    sa.Column('notes', sa.Text(), nullable=True),
    sa.Column('thing_id', sa.Integer(), nullable=False),
    sa.Column('space_id', sa.Integer(), nullable=False),
    sa.Column('time_id', sa.Integer(), nullable=False),
    sa.Column('number_ratings', sa.Integer(), nullable=False),
    sa.Column('total_ratings', sa.Integer(), nullable=False),
    sa.Column('created_on', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['space_id'], ['space.id'], ),
    sa.ForeignKeyConstraint(['thing_id'], ['thing.id'], ),
    sa.ForeignKeyConstraint(['time_id'], ['time.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('thing_subtype_association',
    sa.Column('subtype_id', sa.Integer(), nullable=True),
    sa.Column('thing_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['subtype_id'], ['subtype.id'], ),
    sa.ForeignKeyConstraint(['thing_id'], ['thing.id'], )
    )
    op.create_table('thing_tag_association',
    sa.Column('thing_id', sa.Integer(), nullable=True),
    sa.Column('tag_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['tag_id'], ['tag.id'], ),
    sa.ForeignKeyConstraint(['thing_id'], ['thing.id'], )
    )
    op.create_table('comment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('author_id', sa.Integer(), nullable=True),
    sa.Column('shareable_id', sa.Integer(), nullable=True),
    sa.Column('text', sa.String(length=2054), nullable=True),
    sa.Column('created_on', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['author_id'], ['guttersnipe.id'], ),
    sa.ForeignKeyConstraint(['shareable_id'], ['shareable.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comment')
    op.drop_table('thing_tag_association')
    op.drop_table('thing_subtype_association')
    op.drop_table('shareable')
    op.drop_table('schedule_event_association')
    op.drop_table('message')
    op.drop_table('followers')
    op.drop_table('user_schedule')
    op.drop_table('user')
    op.drop_table('time')
    op.drop_table('thing')
    op.drop_table('subtype')
    op.drop_table('guttersnipe')
    op.drop_table('event')
    op.drop_table('tag')
    op.drop_table('space')
    op.drop_table('schedule')
    op.drop_table('recurrence_rule')
    op.drop_index(op.f('ix_profile_username'), table_name='profile')
    op.drop_table('profile')
    op.drop_table('main_type')
    op.drop_table('kropotkin')
    ### end Alembic commands ###
