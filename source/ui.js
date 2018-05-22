'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Website(down)',
		url: 'https://i4m1k0su.com'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/i4M1k0SU'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/i4M1k0SU'
	},
	{
		label: 'Qiita',
		url: 'https://qiita.com/i4M1k0SU'
	},
	{
		label: 'Blog',
		url: 'https://advantage.hatenadiary.com'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>i4M1k0SU<br /><br />音ゲーマー, Engineer</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
