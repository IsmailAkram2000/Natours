const Tour = require('./../Model/appModel');

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    console.log(tours);
    res.status(200).json({
      status: 'success',
      result: tours.length,
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail',
      Error: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail',
      Error: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTuor = await Tour.create(req.body);

    res.status(201).json({
      status: 'Success',
      data: newTuor,
    });
  } catch (err) {
    console.log(`Error : ${err}`);
    res.status(400).json({
      status: 'Bad Request',
      message: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const newTuor = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'Success',
      data: newTuor,
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail',
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    let deletedTuor = await Tour.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'Success',
      data: deletedTuor,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Bad Request',
      message: err,
    });
  }
};
