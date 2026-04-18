'use client';

import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function Contact({ whiteBg = false }: { whiteBg?: boolean }) {
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev: any) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill in all required fields correctly.',
        confirmButtonColor: '#004F80',
      });
      return;
    }

    setLoader(true);

    const payload = {
      company: "Visionland",
      company_name: "Visionland",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      serviceType: formData.serviceType,
      message: formData.message,
      mail_to: "Doug@visionlandservice.com,Michael@visionlandservice.com,dawn@visionlandservice.com",
    };

    try {
      const response = await fetch(
        "https://mail.futuretouch.org/api/send-message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We have received your request and will contact you shortly.",
          confirmButtonColor: '#004F80',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          message: '',
        });
        setErrors({});
      } else {
        Swal.fire("Error", "Failed to send message. Please try again.", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setLoader(false);
    }
  };

  return (
    <section
      id="contact"
      className={`relative py-12 lg:py-12 overflow-hidden ${whiteBg ? 'bg-white' : 'bg-gray-50'}`}
    >
      <div className="absolute inset-0 dot-bg-light opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left info area - 5 cols */}
          <div className="lg:col-span-5 space-y-10 reveal">
            <div>
              <span className="badge-light mb-6 inline-block">Contact Support</span>
              <h2 className="font-display font-800 text-4xl sm:text-5xl text-navy-dark leading-[1.1] mb-6">
                Start Your <span className="gt-brand">Project</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                We respond to all requests within 1 hour during business hours. Secure, transparent estimates without the wait.
              </p>
            </div>

            <div className="space-y-6">
              {/* Contact Block */}
              <div className="flex gap-5 p-6 rounded-[2rem] bg-white border border-gray-100 shadow-sm transition hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center flex-shrink-0 text-brand">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-700 text-navy-dark uppercase tracking-wider mb-1">Phone</div>
                  <div className="text-xl font-display font-700 text-gray-800">(888) 399-8474</div>
                  <div className="text-sm text-gray-500 mt-1">Mon-Fri, 8AM-5PM</div>
                </div>
              </div>

              {/* Email Block */}
              <div className="flex gap-5 p-6 rounded-[2rem] bg-white border border-gray-100 shadow-sm transition hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-sky-400/10 flex items-center justify-center flex-shrink-0 text-sky-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-700 text-navy-dark uppercase tracking-wider mb-1">Email</div>
                  <div className="text-lg font-display font-600 text-gray-800">info@visionlandservice.com</div>
                  <div className="text-sm text-gray-500 mt-1">24/7 Monitoring</div>
                </div>
              </div>

              {/* Location Block */}
              <div className="flex gap-5 p-6 rounded-[2rem] bg-white border border-gray-100 shadow-sm transition hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-navy-dark/5 flex items-center justify-center flex-shrink-0 text-navy-dark">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-700 text-navy-dark uppercase tracking-wider mb-1">Office</div>
                  <div className="text-base font-600 text-gray-800">PO BOX 941186, <br />MAITLAND FLORIDA 32794</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form area - 7 cols */}
          <div className="lg:col-span-7 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* decorative blur in corner */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand/10 rounded-full blur-3xl pointer-events-none"></div>

              <h3 className="font-display font-800 text-2xl mb-8 text-navy-dark border-b border-gray-100 pb-6">Request Your Quote</h3>

              <form onSubmit={handleContactSubmit} className="space-y-6 relative" noValidate>
                <div>
                  <label className="text-sm font-700 text-navy-dark mb-2 block">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all`}
                    placeholder="John Doe"
                    required
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-2 font-600">{errors.name}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-700 text-navy-dark mb-2 block">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all`}
                      placeholder="john@company.com"
                      required
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-2 font-600">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-700 text-navy-dark mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all`}
                      placeholder="(555) 000-0000"
                      required
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-2 font-600">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-700 text-navy-dark mb-2 block">Service Type</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border ${errors.serviceType ? 'border-red-500' : 'border-gray-200'} rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all appearance-none cursor-pointer`}
                  >
                    <option value="">Select a survey type</option>
                    <option>ALTA Survey</option>
                    <option>Boundary Survey</option>
                    <option>As-Built Survey</option>
                    <option>Construction Layout</option>
                    <option>Elevation Certificate</option>
                    <option>Topographic Survey</option>
                    <option>Not sure — need guidance</option>
                  </select>
                  {errors.serviceType && <p className="text-xs text-red-500 mt-2 font-600">{errors.serviceType}</p>}
                </div>

                <div>
                  <label className="text-sm font-700 text-navy-dark mb-2 block">Project Details / Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full bg-gray-50 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-xl px-5 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all resize-none`}
                    placeholder="Tell us about your property and project requirements..."
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-500 mt-2 font-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loader}
                  className="btn-brand w-full py-5 rounded-xl text-md mt-6 disabled:opacity-70 transition flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  {loader ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
