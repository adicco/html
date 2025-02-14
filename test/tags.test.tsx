import assert from 'node:assert';
import test, { describe } from 'node:test';
import Html from '../index';

describe('Tags', () => {
  test('Self-closing html tags', () => {
    assert.equal('<area/>', <area></area>);

    assert.equal('<hr/>', <hr></hr>);

    assert.equal('<hr>content</hr>', <hr>content</hr>);

    assert.equal('<meta charset="utf8"/>', <meta charset="utf8"></meta>);

    //@ts-expect-error - invalid html
    assert.equal('<video autoplay></video>', <video autoplay></video>);
    assert.equal('<video autoplay=""></video>', <video autoplay=""></video>);

    assert.equal('<video autoplay="test"></video>', <video autoplay="test"></video>);
  });

  test('custom tag', () => {
    assert.equal(<tag of="div" attr />, '<div attr></div>');

    assert.equal(<tag of="div" attr></tag>, '<div attr></div>');

    assert.equal(
      <tag of="div" attr>
        1
      </tag>,
      '<div attr>1</div>'
    );

    assert.equal(
      <tag of="div" attr>
        {' '}
      </tag>,
      '<div attr> </div>'
    );
  });

  test('custom void tag', () => {
    assert.equal(<tag of="link" attr />, '<link attr/>');

    assert.equal(<tag of="link" attr></tag>, '<link attr/>');

    assert.equal(
      <tag of="link" attr>
        1
      </tag>,
      '<link attr>1</link>'
    );

    assert.equal(
      <tag of="link" attr>
        {' '}
      </tag>,
      '<link attr> </link>'
    );

    assert.equal(<tag of="my-custom-KEBAB" />, '<my-custom-KEBAB></my-custom-KEBAB>');
  });
});
