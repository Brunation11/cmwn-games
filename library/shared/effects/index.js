import effects from './effects';

const makeEffect = function (effectName, node, opts = {}) {
    _.invoke(effects, effectName, node, opts);
};

if (!window.CMWN) window.CMWN = {};
if (!window.CMWN.makeEffect) window.CMWN.makeEffect = makeEffect;
