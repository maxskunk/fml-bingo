from flask import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import os
from flask import jsonify

cred = credentials.ApplicationDefault()
default_app = firebase_admin.initialize_app(cred, {
    'projectId': os.environ.get('PROJECT_ID', ''),
})
db = firestore.client()


def init(request):
    # data['board_data'] = board_data
    # json_data = json.dumps(data)
    #
    request_json = request.get_json()
    board_name = None
    if request.args and 'board_name' in request.args:
        board_name = request.args.get('board_name')
    elif request_json and 'board_name' in request_json:
        board_name = request_json['board_name']
    else:
        return json.dumps({'error': 'hey we need to know which bingo board you dingo.'}), 400, {'ContentType': 'application/json'}
    docs = db.collection(u'fml_bingo').where(
        u'board_id', u'==', board_name).stream()
    board_data = []
    for doc in docs:
        label = doc.to_dict()['label']
        position = doc.to_dict()['position']
        board_row = {}
        board_row['label'] = label
        board_row['id'] = position
        board_data.append(board_row)

    data = {}
    data['board_data'] = board_data
    json_data = json.dumps(data)
    return json.dumps({'success': True, 'data': json_data}), 200, {'ContentType': 'application/json'}
