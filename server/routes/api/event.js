'use strict';

const express = require('express');
const router = express.Router();
const {Event} = require('../../models/');

router.get('/', (req, res, next) => {

  Promise.all([
    Event.findAll({}),
  ])
    .then((events) => {
      res.json({events});
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  console.log('event api HERE!!!!!');
  Event.findAll({
    where: {
      event_id: req.params.id
    }
  })
    .then(events => {
      res.json(events);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const title = req.body.title;
  const time = req.body.time;
  const date = req.body.date;
  const description = req.body.description;
  const eventId = req.body.eventId;
  console.log(title, time, date, description, eventId);
  Event
    .create({
      date: date,
      time: time,
      title: title,
      description: description,
    })
    .then(event => {
      // console.log(event);
    //   return Promise.all(
    //     [ event,
    //       event.setUser(Number(userId)),
    //       event.setNote(Number(noteId)) ]);
    // })
    // .then(([ event ]) => {
    //   return event.includeUser();
    // })
    // .then(eventWithUser => {
      res.json(event);
    })
    .catch(next);
});


router.put('/:id', (req, res, next) => {
  console.log(req.body);
  console.log(req.params.id);
  const text = req.body.text;

  Comment.update({text}, {
    where: {
      id: Number(req.params.id)
    }
  })
    .then(comment => res.json(comment))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Event.destroy({
    where: {
      id: Number(req.params.id)
    }
  })
    .then((result) => res.json(result))
    .catch(next);
});

router.use((err, req, res, next) => {
  console.log('Error in server/routes/api/comment.js', err);
  next(err);
});


module.exports = router;
