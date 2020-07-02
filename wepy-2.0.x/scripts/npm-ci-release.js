/* eslint no-console: 0 */

const path = require('path');
const execa = require('execa');

const version = process.argv[2];
// @wepy/cli@2.0.0-alpha.11

if (!version.startsWith('@wepy')) {
  console.log('Do nothing with this version: "' + version + '"');
  process.exit();
}
const client = 'npm';
// eslint-disable-next-line no-unused-vars
const [_, packageName, ver] = version.split('@');
const dirname = packageName.split('/')[1];

if (!dirname || !ver) {
  console.log('Invalid version: "' + version + '"');
  process.exit();
}

const tag = ver.indexOf('alpha') > -1 ? 'alpha' : ver.indexOf('beta') > -1 ? 'beta' : '';

let publishParams = ['publish', '--access', 'public'];

if (tag) {
  publishParams = publishParams.concat(['--tag', tag]);
}

const cwd = path.join(process.cwd(), 'packages', dirname);

console.log('CWD: ' + cwd);
console.log('EXEC: ' + [client].concat(publishParams).join(' '));

execa(client, publishParams, { cwd })
  .then(res => {
    console.log(res.stdout);
    const distTagParams = ['dist-tag', 'add', version, 'next'];
    console.log('EXEC: ' + [client].concat(distTagParams).join(' '));
    return execa(client, distTagParams, { cwd });
  })
  .catch(e => {
    console.log(e);
  });
