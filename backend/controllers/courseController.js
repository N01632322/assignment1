const courses = require('../data/courseData');

const getAllCourses = (req, res) => res.json(courses);

const addCourse = (req, res) => {
    const { id, name, department, isOpen } = req.body;
    const newCourse = { id, name, department, isOpen };
    courses.push(newCourse);
    res.status(201).json(newCourse);
};

module.exports = { getAllCourses, addCourse };