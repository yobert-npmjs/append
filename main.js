module.exports = append;

function append() {
	for(var i = 1; i < arguments.length; i++) {
		_append_v(arguments[0], arguments[i]);
	}
}

function _append_v(e, v) {
	if(typeof v == 'number') {
		e.appendChild(document.createTextNode(v.toString()));
	} else if(Object.prototype.toString.apply(v) === '[object String]') {
		e.appendChild(document.createTextNode(v));
	} else if(v && typeof v == 'object' && v.nodeType) {
		e.appendChild(v);
	} else if(Object.prototype.toString.apply(v) === '[object Array]') {
		for(var i = 0; i < v.length; i++) {
			_append_v(e, v[i]);
		}
	}
	return;
}


