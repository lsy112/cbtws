from flask import render_template, url_for, flash, redirect, request
from app import app, db
from app.models import User, Score

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/profile/<int:user_id>')
def profile(user_id):
    user = User.query.get_or_404(user_id)
    return render_template('profile.html', user=user)

@app.route('/history/<int:user_id>')
def history(user_id):
    user = User.query.get_or_404(user_id)
    scores = Score.query.filter_by(user_id=user.id).all()
    return render_template('history.html', scores=scores)

# 其他路由和业务逻辑...
