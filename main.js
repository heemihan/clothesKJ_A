const imageRoots = {
  background: [".", "img"],
  character: ["의상", "img"],
  clothes: ["의상", "img/closthset", "img/clothset", "img"],
};

const backgrounds = ["A", "B", "C", "D", "E"].map((id) => ({
  id,
  name: id,
  files: [`backgrounnd_${id}.png`, `background_${id}.png`],
}));

const bases = {
  left: "character_left.png",
  right: "character_right.png",
};

const outfits = {
  left: [
    { id: "none", name: "기본", file: "" },
    { id: "black", name: "Black", file: "left_black.png" },
    { id: "hidden", name: "Hidden", file: "left_hidden_1.png" },
    { id: "interview", name: "Interview", file: "left_interview.png" },
    { id: "south", name: "South", file: "left_south.png" },
    { id: "surgery", name: "Surgery", file: "left_surgery.png" },
    { id: "wine", name: "Wine", file: "left_wine.png" },
  ],
  right: [
    { id: "none", name: "기본", file: "" },
    { id: "shirt1", name: "Shirt 1", file: "right_shirt1.png" },
    { id: "sute", name: "Sute", file: "right_sute.png" },
    { id: "hidden", name: "Hidden", file: "right_hidden.png" },
    { id: "surgery", name: "Surgery", file: "right_surgery.png" },
  ],
};

const events = {
  left: [
    { id: "A", name: "Event A", clothes: "left_event_A_C.png", face: "left_event_A_F.png" },
    { id: "B", name: "Event B", clothes: "left_event_B_C.png", face: "left_event_B_F.png" },
    { id: "C", name: "Event C", clothes: "left_event_C_C.png", face: "left_event_C_F.png" },
    { id: "D", name: "Event D", clothes: "left_event_D_C.png", face: "left_event_D_F.png" },
    { id: "E", name: "Event E", clothes: "left_event_E_C.png", face: "left_event_E_F.png" },
    { id: "hidden_A", name: "Hidden A", clothes: "left_hidden_event_A_C.png", face: "left_hidden_event_A_F.png", comboOnly: true },
  ],
  right: [
    { id: "A", name: "Event A", clothes: "right_event_A_C.png", face: "right_event_A_F.png" },
    { id: "B", name: "Event B", clothes: "right_event_B_C.png", face: "right_event_B_F.png" },
    { id: "C", name: "Event C", clothes: "right_event_C_C.png", face: "right_event_C_F.png" },
    { id: "D", name: "Event D", clothes: "right_event_D_C.png", face: "right_event_D_F.png" },
    { id: "E", name: "Event E", clothes: "right_event_E_C.png", face: "right_event_E_F.png" },
    { id: "hidden_A", name: "Hidden A", clothes: "right_hidden_event_A_C.png", face: "right_hidden_event_A_F.png" },
  ],
};

const specialComboEvents = [
  {
    left: "hidden_A",
    right: "hidden_A",
    characters: {
      left: "left_hidden_event_A_F.png",
      right: "right_hidden_event_A_F.png",
    },
  },
];

const eventDialogues = {
  "A:A": [
    { speaker: "백강혁", text: "외상외과 펠로우~!" },
    { speaker: "양재원", text: ".....", delayAfter: 3000 },
    { speaker: "양재원", text: "으악?" },
  ],
  "B:B": [
    { speaker: "재원", text: "저 자신없습니다. 교수님" },
    { speaker: "강혁", text: "내가 자신있어. 널 믿는 날 믿어. 나 믿지?" },
  ],
  "outfit:hidden:hidden": [
    { speaker: "이창, 천승휘", text: "장르 잘못 찾아왔어 (요)." },
  ],
  "D:D": [
    { speaker: "강혁", text: "잘했다고-", delayAfter: 3000 },
    { speaker: "강혁", text: "양재원 선생." },
    { speaker: "재원", text: "ㅇ....우...우으으으.....시X발...X발!!!" },
  ],
  "hidden_A:hidden_A": [
    { speaker: "말라크", text: "야, 너 누군데?" },
    { speaker: "재원", text: "교, 교수님??" },
  ],
  "E:E": [
    { speaker: "강혁", text: "노예 1호~" },
    { speaker: "재원", text: "아아아아아~~~!!", delayAfter: 1000 },
    { speaker: "재원", text: "싫어요!!싫어!!!\n이름 불러줘요. 이름!!" },
  ],
  "C:C": [
    { speaker: "강혁", text: "먼저 갑니다!!!" },
    { speaker: "재원", text: "으아아아아아!!!!!!!!!!", fontSize: "23px" },
    { speaker: "재원", text: "왜 아무도 안말려어어어어!!!!" },
  ],
};

const state = {
  background: "A",
  outfit: { left: "none", right: "none" },
  event: { left: "none", right: "none" },
  shownComboKey: "",
  history: [],
};

const wearAdjustments = {
  left: {
    default: { x: "0px", y: "-1px", scale: 1.01 },
    hidden: { x: "0px", y: "-1px", scale: 1.01 },
  },
  right: {
    default: { x: "0px", y: "-1px", scale: 1.01 },
    hidden: { x: "0px", y: "-1px", scale: 1.01 },
    shirt1: { x: "0px", y: "1px", scale: 1.01 },
  },
};

const $ = (selector) => document.querySelector(selector);

const nodes = {
  background: $("#background"),
  backgroundName: $("#backgroundName"),
  prevBackground: $("#prevBackground"),
  nextBackground: $("#nextBackground"),
  backButton: $("#backButton"),
  resetButton: $("#resetButton"),
  stage: $("#stage"),
  leftDoll: $("#leftDoll"),
  rightDoll: $("#rightDoll"),
  leftBase: $("#leftBase"),
  rightBase: $("#rightBase"),
  leftOutfit: $("#leftOutfit"),
  rightOutfit: $("#rightOutfit"),
  leftEventClothes: $("#leftEventClothes"),
  rightEventClothes: $("#rightEventClothes"),
  leftEventFace: $("#leftEventFace"),
  rightEventFace: $("#rightEventFace"),
  leftClosetGrid: $("#leftClosetGrid"),
  rightClosetGrid: $("#rightClosetGrid"),
  dialogue: $("#dialogue"),
  dialogueText: $("#dialogueText"),
  dialogueClose: $("#dialogueClose"),
};

let activeDrag = null;
let pendingDrag = null;
let dialogueTimer = null;
let activeDialogue = null;

function pathsFor(roots, files) {
  const fileList = Array.isArray(files) ? files : [files];
  return roots.flatMap((root) => fileList.filter(Boolean).map((file) => `${root}/${file}`));
}

function setImageWithFallback(image, candidates, shouldShow = true) {
  const sources = candidates.filter(Boolean);
  image.dataset.sourceIndex = "0";
  image.onerror = () => {
    const nextIndex = Number(image.dataset.sourceIndex) + 1;
    if (nextIndex < sources.length) {
      image.dataset.sourceIndex = String(nextIndex);
      image.src = sources[nextIndex];
      return;
    }
    image.style.display = "none";
  };

  if (!sources.length || !shouldShow) {
    image.removeAttribute("src");
    image.style.display = "none";
    return;
  }

  image.style.display = "block";
  image.src = sources[0];
}

function setWearAdjustment(image, adjustment = {}) {
  image.style.setProperty("--wear-x", adjustment.x || "0px");
  image.style.setProperty("--wear-y", adjustment.y || "0px");
  image.style.setProperty("--wear-scale", adjustment.scale || 1);
}

function currentBackgroundIndex() {
  return Math.max(0, backgrounds.findIndex((item) => item.id === state.background));
}

function currentOutfit(side) {
  return outfits[side].find((item) => item.id === state.outfit[side]) || outfits[side][0];
}

function currentEvent(side) {
  return events[side].find((item) => item.id === state.event[side]);
}

function currentComboEvent() {
  const specialCombo = specialComboEvents.find((combo) => (
    state.event.left === combo.left && state.event.right === combo.right
  ));
  if (specialCombo) {
    return specialCombo;
  }

  const leftEvent = currentEvent("left");
  const rightEvent = currentEvent("right");
  if (leftEvent && rightEvent && leftEvent.id === rightEvent.id && !leftEvent.comboOnly && !rightEvent.comboOnly) {
    return {
      left: leftEvent.id,
      right: rightEvent.id,
      characters: {
        left: leftEvent.face,
        right: rightEvent.face,
      },
    };
  }

  return null;
}

function snapshot() {
  return {
    background: state.background,
    outfit: { ...state.outfit },
    event: { ...state.event },
    shownComboKey: state.shownComboKey,
  };
}

function restore(nextState) {
  state.background = nextState.background;
  state.outfit = { ...nextState.outfit };
  state.event = { ...nextState.event };
  state.shownComboKey = nextState.shownComboKey || "";
  renderAll();
}

function remember() {
  state.history.push(snapshot());
  if (state.history.length > 20) {
    state.history.shift();
  }
}

function renderStage() {
  const bg = backgrounds[currentBackgroundIndex()] || backgrounds[0];
  const combo = currentComboEvent();
  if (nodes.backgroundName) {
    nodes.backgroundName.textContent = bg.name;
  }
  setImageWithFallback(nodes.background, pathsFor(imageRoots.background, bg.files));

  ["left", "right"].forEach((side) => {
    const outfit = currentOutfit(side);
    const event = currentEvent(side);
    const outfitAdjustment = wearAdjustments[side][outfit.id] || wearAdjustments[side].default;
    const eventAdjustment = wearAdjustments[side].default;
    const effectiveEvent = event;
    const hasEvent = Boolean(effectiveEvent);
    const eventCharacter = combo?.characters?.[side] || "";
    const hasEventCharacter = Boolean(eventCharacter);

    setImageWithFallback(nodes[`${side}Base`], pathsFor(imageRoots.character, bases[side]), !hasEventCharacter);
    setImageWithFallback(nodes[`${side}Outfit`], pathsFor(imageRoots.clothes, outfit.file), !hasEvent);
    setImageWithFallback(nodes[`${side}EventClothes`], pathsFor(imageRoots.clothes, effectiveEvent?.clothes || ""));
    setImageWithFallback(nodes[`${side}EventFace`], pathsFor(imageRoots.clothes, eventCharacter));
    setWearAdjustment(nodes[`${side}Outfit`], outfitAdjustment);
    setWearAdjustment(nodes[`${side}EventClothes`], eventAdjustment);
    setWearAdjustment(nodes[`${side}EventFace`], eventAdjustment);
  });
}

function renderCloset() {
  renderClosetSide("left", nodes.leftClosetGrid);
  renderClosetSide("right", nodes.rightClosetGrid);
}

function renderClosetSide(side, container) {
  container.replaceChildren();

  const closetItems = [
    ...outfits[side],
    ...events[side].map((event) => ({ ...event, isEvent: true, file: event.clothes })),
  ].filter((item) => item.id !== "none").sort((a, b) => closetOrder(a) - closetOrder(b));

  closetItems.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "closet-card";
    card.dataset.side = side;
    card.dataset.kind = item.isEvent ? "event" : "outfit";
    card.dataset.id = item.id;
    card.dataset.file = item.file || "";
    card.setAttribute("aria-label", `${side === "left" ? "왼쪽" : "오른쪽"} ${item.name}`);

    if ((!item.isEvent && state.outfit[side] === item.id) || (item.isEvent && state.event[side] === item.id)) {
      card.classList.add("active");
    }

    const hanger = document.createElement("i");
    hanger.className = "hanger";
    card.append(hanger);

    if (item.file) {
      const img = document.createElement("img");
      img.alt = "";
      setImageWithFallback(img, pathsFor(imageRoots.clothes, item.file));
      card.append(img);
    } else {
      const empty = document.createElement("div");
      empty.className = "empty-thumb";
      card.append(empty);
    }

    const label = document.createElement("span");
    label.textContent = item.isEvent ? `${item.name} C/F` : item.name;
    card.append(label);

    if (window.PointerEvent) {
      card.addEventListener("pointerdown", startDrag);
    } else {
      card.addEventListener("mousedown", startDrag);
    }
    container.append(card);
  });
}

function isHiddenItem(item) {
  return `${item.id} ${item.name} ${item.file || ""} ${item.clothes || ""} ${item.face || ""}`.toLowerCase().includes("hidden");
}

function closetOrder(item) {
  if (item.id === "hidden" && !item.isEvent) {
    return 2;
  }
  return isHiddenItem(item) ? 1 : 0;
}

function renderAll() {
  renderStage();
  renderCloset();
}

function applyItem(side, kind, id, saveHistory = true) {
  if (saveHistory) {
    remember();
  }

  if (kind === "event") {
    state.event[side] = id;
    state.outfit[side] = "none";
  } else {
    state.outfit[side] = id;
    state.event[side] = "none";
    state.shownComboKey = "";
  }

  renderAll();
  maybeShowComboDialogue();
}

function comboKey(combo) {
  return combo ? `${combo.left}:${combo.right}` : "";
}

function dialogueKey(combo) {
  const key = comboKey(combo);
  if (key) {
    return key;
  }

  if (state.outfit.left === "hidden" && state.outfit.right === "hidden") {
    return "outfit:hidden:hidden";
  }

  return "";
}

function maybeShowComboDialogue() {
  const combo = currentComboEvent();
  const key = dialogueKey(combo);
  if (!key) {
    state.shownComboKey = "";
    return;
  }

  if (state.shownComboKey === key) {
    return;
  }

  state.shownComboKey = key;
  showDialogueSequence(key);
}

function showDialogueSequence(key) {
  const lines = eventDialogues[key] || [{ text: "이벤트 발생" }];
  clearTimeout(dialogueTimer);
  activeDialogue = { key, lines, index: 0 };
  nodes.dialogue.classList.add("show");
  renderDialogueLine();
}

function renderDialogueLine() {
  const line = activeDialogue?.lines[activeDialogue.index];
  if (!line) {
    hideDialogue();
    return;
  }

  nodes.dialogueText.textContent = line.speaker ? `${line.speaker} : ${line.text}` : line.text;
  nodes.dialogueText.style.fontSize = line.fontSize || "";

  clearTimeout(dialogueTimer);
  if (line.delayAfter) {
    dialogueTimer = setTimeout(nextDialogue, line.delayAfter);
  }
}

function nextDialogue() {
  if (!activeDialogue) {
    return;
  }

  clearTimeout(dialogueTimer);
  activeDialogue.index += 1;
  renderDialogueLine();
}

function hideDialogue() {
  clearTimeout(dialogueTimer);
  activeDialogue = null;
  nodes.dialogueText.style.fontSize = "";
  nodes.dialogue.classList.remove("show");
}

function changeBackground(step) {
  remember();
  const nextIndex = (currentBackgroundIndex() + step + backgrounds.length) % backgrounds.length;
  state.background = backgrounds[nextIndex].id;
  renderAll();
}

function resetGame() {
  remember();
  state.background = "A";
  state.outfit.left = "none";
  state.outfit.right = "none";
  state.event.left = "none";
  state.event.right = "none";
  state.shownComboKey = "";
  hideDialogue();
  renderAll();
}

function startDrag(event) {
  if (event.button !== undefined && event.button !== 0) {
    return;
  }

  const dragData = dragDataFromEvent(event);
  if (!dragData) {
    return;
  }

  if (event.pointerType === "touch") {
    pendingDrag = {
      ...dragData,
      startX: event.clientX,
      startY: event.clientY,
    };
    window.addEventListener("pointermove", onPendingDragMove);
    window.addEventListener("pointerup", cancelPendingDrag, { once: true });
    window.addEventListener("pointercancel", cancelPendingDrag, { once: true });
    return;
  }

  beginDrag(event, dragData);
}

function dragDataFromEvent(event) {
  const card = closetCardFromPointer(event, event.currentTarget);
  const side = card.dataset.side;
  const kind = card.dataset.kind;
  const id = card.dataset.id;
  const dragFile = card.dataset.file;
  const item = kind === "event"
    ? events[side].find((entry) => entry.id === id)
    : outfits[side].find((entry) => entry.id === id);

  if (!item || !dragFile) {
    return null;
  }

  return {
    side,
    kind,
    id,
    dragFile,
    sourceTarget: event.currentTarget,
  };
}

function beginDrag(event, dragData) {
  event.preventDefault();

  activeDrag = {
    side: dragData.side,
    kind: dragData.kind,
    id: dragData.id,
    ghost: makeGhost(dragData.dragFile),
  };

  document.body.append(activeDrag.ghost);
  moveDrag(event.clientX, event.clientY);
  dragData.sourceTarget.setPointerCapture?.(event.pointerId);

  const moveEvent = event.type === "mousedown" ? "mousemove" : "pointermove";
  const endEvent = event.type === "mousedown" ? "mouseup" : "pointerup";
  activeDrag.moveEvent = moveEvent;
  activeDrag.endEvent = endEvent;
  window.addEventListener(moveEvent, onDragMove);
  window.addEventListener(endEvent, onDragEnd, { once: true });
}

function onPendingDragMove(event) {
  if (!pendingDrag) {
    return;
  }

  const dx = event.clientX - pendingDrag.startX;
  const dy = event.clientY - pendingDrag.startY;
  const absX = Math.abs(dx);
  const absY = Math.abs(dy);
  if (absX < 8 && absY < 8) {
    return;
  }

  if (absX > absY) {
    cancelPendingDrag();
    return;
  }

  const dragData = pendingDrag;
  cancelPendingDrag();
  beginDrag(event, dragData);
}

function cancelPendingDrag() {
  window.removeEventListener("pointermove", onPendingDragMove);
  window.removeEventListener("pointerup", cancelPendingDrag);
  window.removeEventListener("pointercancel", cancelPendingDrag);
  pendingDrag = null;
}

function closetCardFromPointer(event, fallbackCard) {
  const grid = fallbackCard.closest(".closet-grid");
  if (!grid) {
    return fallbackCard;
  }

  const x = event.clientX;
  const y = event.clientY;
  const candidates = Array.from(grid.querySelectorAll(".closet-card"))
    .map((card) => {
      const image = card.querySelector("img");
      const visualRect = (image || card).getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const isInVisual = (
        x >= visualRect.left && x <= visualRect.right
        && y >= visualRect.top && y <= visualRect.bottom
      );
      const isInCard = (
        x >= cardRect.left && x <= cardRect.right
        && y >= cardRect.top && y <= cardRect.bottom
      );

      if (!isInVisual && !isInCard) {
        return null;
      }

      const centerX = visualRect.left + visualRect.width / 2;
      const centerY = visualRect.top + visualRect.height / 2;
      return {
        card,
        score: Math.abs(x - centerX) + Math.abs(y - centerY) * 0.35,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.score - b.score);

  return candidates[0]?.card || fallbackCard;
}

function makeGhost(file) {
  const ghost = document.createElement("div");
  ghost.className = "drag-ghost";

  if (file) {
    const img = document.createElement("img");
    img.alt = "";
    setImageWithFallback(img, pathsFor(imageRoots.clothes, file));
    ghost.append(img);
  }

  return ghost;
}

function onDragMove(event) {
  if (!activeDrag) {
    return;
  }
  moveDrag(event.clientX, event.clientY);
}

function moveDrag(x, y) {
  activeDrag.ghost.style.left = `${x}px`;
  activeDrag.ghost.style.top = `${y}px`;
  highlightDropTarget(x, y);
}

function onDragEnd(event) {
  if (!activeDrag) {
    return;
  }

  window.removeEventListener(activeDrag.moveEvent, onDragMove);

  const targetSide = nearestDoll(event.clientX, event.clientY);
  clearDropHighlights();

  if (targetSide === activeDrag.side) {
    applyItem(activeDrag.side, activeDrag.kind, activeDrag.id, true);
  }

  activeDrag.ghost.remove();
  activeDrag = null;
}

function nearestDoll(x, y) {
  const candidates = [
    { side: "left", node: nodes.leftDoll },
    { side: "right", node: nodes.rightDoll },
  ];

  let closest = null;
  candidates.forEach((candidate) => {
    const rect = candidate.node.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(x - centerX, y - centerY);
    const limit = Math.max(rect.width, rect.height) * 0.68;

    if (distance < limit && (!closest || distance < closest.distance)) {
      closest = { side: candidate.side, distance };
    }
  });

  return closest?.side || null;
}

function highlightDropTarget(x, y) {
  clearDropHighlights();
  const side = nearestDoll(x, y);
  if (side) {
    nodes[`${side}Doll`].classList.add("drop-ready");
  }
}

function clearDropHighlights() {
  nodes.leftDoll.classList.remove("drop-ready");
  nodes.rightDoll.classList.remove("drop-ready");
}

nodes.prevBackground.addEventListener("click", () => changeBackground(-1));
nodes.nextBackground.addEventListener("click", () => changeBackground(1));
nodes.resetButton.addEventListener("click", resetGame);
nodes.dialogue.addEventListener("click", nextDialogue);
nodes.dialogueClose.addEventListener("click", (event) => {
  event.stopPropagation();
  nextDialogue();
});
nodes.backButton.addEventListener("click", () => {
  const last = state.history.pop();
  if (last) {
    restore(last);
  }
});

renderAll();
